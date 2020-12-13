// const userModel = require('../models/user');
const { sequelize, Op, fn } = require('sequelize');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const { Content, Actor, Series, Recommend } = require('../models');

const home = {
  /**
   * 메인화면 & 상세페이지 상단
   * @summary 비디오 띄우기
   * @param mainIdx
   * @return imgUrl, videoUrl, logoUrl
   */

  mainIdx: async (req, res) => {
    const { idx } = req.body;

    console.log(idx);

    if (idx === undefined) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }
    try {
      const results = await Content.findAll({
        where: {
          id : idx,
        },
      })
      return res.status(statusCode.OK).send(util.success(statusCode.OK, "message", results));
    } catch(error) {
      console.error(error);
    }
  },
  getContents: async (req, res) => {
    const { idx } = req.body;

    if (!mainIdx) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }
    try {
      const results = await Content.findAll({
        where: {
          id : mainIdx, 
        },
      })
      console.log(results);
      return res.status(statusCode.OK).send(util.success(statusCode.OK, "message", results));
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = home;
