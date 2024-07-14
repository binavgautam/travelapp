// Use Sequelize to connect to the Postgres Database
const Sequelize = require("sequelize");
const { DATABASE_URL } = require("./config");
const logger = require("./logger");

const sequelize = new Sequelize(DATABASE_URL);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    logger.info("Connected to database");
  } catch (error) {
    logger.error("Cannot connect to database", error);
    return process.exit(1);
  }
  return null;
};

module.exports = { connectToDatabase, sequelize };
