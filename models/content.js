const Content = (sequelize, DataTypes) => {
  return sequelize.define(
    'Content',
    {
      //모델의 Attributes (Column)을 정의하는곳
      imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      logoUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      videoUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      menuType: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Content;
