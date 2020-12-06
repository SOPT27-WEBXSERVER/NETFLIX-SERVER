const Recommend = (sequelize, DataTypes) => {
  return sequelize.define(
    'Recommend',
    {
      //모델의 Attributes (Column)을 정의하는곳
      imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      genre: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      info: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      detail: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ContentId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'Content',
          key: 'id',
        },
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Recommend;
