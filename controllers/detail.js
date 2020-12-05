// const userModel = require('../models/user');
const { sequelize, Op, fn } = require('sequelize');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const { Content, Actor, Series } = require('../models');

const detail = {
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
};

module.exports = detail;
