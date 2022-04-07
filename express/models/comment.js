const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }

  static associate(db) {
    // 댓글들은 사용자에게 귀속된다
    db.Comment.belongsTo(db.User);
    // 댓글들은 게시물에게 귀속된다
    db.Comment.belongsTo(db.Post);
  }
};
