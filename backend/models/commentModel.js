const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Comment extends Model {}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postedDate: {
      type: DataTypes.DATE,
    },
    /*
  userId:
  postId:
  */
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "comment",
  }
);

module.exports = Comment;
