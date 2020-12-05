const Result = (sequelize, DataTypes) => {
  return sequelize.define(
    "Result",
    {
      //모델의 Attributes (Column)을 정의하는곳
      imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      videoUrl:{
        type:DataTypes.STRING(100),
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT(),
        allowNull: false,
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Result;
