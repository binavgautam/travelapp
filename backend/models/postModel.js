const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Post extends Model {}
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    flightName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flightDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fromAirport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toAirport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postedDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    /*user relation:{
        id:
    },
    comments:{
       commentId:
    }*/
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "post",
  }
);

module.exports = Post;
