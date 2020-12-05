const Series = (sequelize, DataTypes) => {
  return sequelize.define(
    'Series',
    {
      //모델의 Attributes (Column)을 정의하는곳
      imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      seriesNum: {
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

module.exports = Series;
