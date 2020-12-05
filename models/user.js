const User = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      //모델의 Attributes (Column)을 정의하는곳
      birthYear:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      score:{
        type:DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
