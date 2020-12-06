// const userModel = require('../models/user');
const { sequelize, Op, fn } = require('sequelize');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const { Content, Actor, Series, Recommend } = require('../models');

const detail = {
  /**
   * 회차 정보
   * @summary 회차 정보 이미지, 몇 회차
   * @param content idx 번호
   * @return 회차 정보 이미지, 몇 회차
   */
  getSeries: async (req, res, next) => {
    const ContentId = req.params.idx;

    console.log(ContentId);

    if (ContentId === undefined) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    try {
      const results = await Series.findAll({
        where: {
          ContentId: ContentId,
        },
      });
      return res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.SUCCESS, results));
    } catch (err) {
      console.log(err);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resMessage.DB_ERROR));
    }
  },
};

module.exports = detail;
