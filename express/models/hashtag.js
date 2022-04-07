const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        modelName: "Hashtag",
        tableName: "hashtags",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }

  static associate(db) {
    // 해쉬태그 <-> 게시물 다대다 관계 (매개 테이블 : PostHashtag)
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  }
};
