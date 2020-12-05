// const userModel = require('../models/user');
const { sequelize, Op, fn } = require('sequelize');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const calculateScore = require('../modules/calculateScore');
const getResultId = require('../modules/getResultId');
const { User, Result } = require('../models');

const user = {
  /**
   * 점수값을 계산해 user row 생성
   * @summary user 생성
   * @param name, birthYear, answers
   * @return 새로 생성된 user
   */
  createUser: async (req, res, next) => {
    const { birthYear, answers } = req.body;
    if (birthYear === undefined || answers === undefined) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    const score = calculateScore(answers);
    const resultId = getResultId(score);

    try {
      const result = await Result.findOne({ where: { id: resultId } });
      const newUser = await User.create({
        birthYear: birthYear,
        score: score,
      });

      await result.addUser(newUser);

      req.user = newUser;

      next();
    } catch (err) {
      console.log(err);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resMessage.DB_ERROR));
    }
  },

  getResult: async (req, res) => {
    const levelNum = req.params.levelNum;
    try {
      // step이 몇번인지 알아낸 이후에,
      const results = await Result.findOne({
        where: {
          id: levelNum,
        },
      });

      return res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.SUCCESS, results));
    } catch (err) {
      console.log(err);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resMessage.CREATE_POST_FAIL));
    }
  },

  getScoreRate: async (req, res) => {
    try {
      // 생년월일 같은 사람들 몇명있는지
      const sameBirthCount = await User.findOne({
        attributes: [[fn('COUNT', '*'), 'count']],
        where: {
          birthYear: req.user.birthYear,
        },
      });

      // 해당 사용자 점수 이상인 사람 수 조회
      const userScoreCount = await User.findOne({
        attributes: [[fn('COUNT', '*'), 'count']],
        where: {
          score: { [Op.gte]: req.user.score },
        },
      });
      // console.log(userScoreCount.dataValues.count);
      // console.log(sameBirthCount.dataValues.count);

      const scoreRate = Math.round((userScoreCount.dataValues.count / sameBirthCount.dataValues.count) * 100);
      return res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.SUCCESS, scoreRate));
    } catch (err) {
      console.log(err);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resMessage.DB_ERROR));
    }
  },
};

module.exports = user;
