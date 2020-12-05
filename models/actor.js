const Actor = (sequelize, DataTypes) => {
  return sequelize.define(
    'Actor',
    {
      //모델의 Attributes (Column)을 정의하는곳
      imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      actorType: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      castingName: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      actorName: {
        type: DataTypes.STRING(20),
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

module.exports = Actor;
