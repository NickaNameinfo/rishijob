const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "u490757224_rishijob",
  "u490757224_rishijobuser",
  "yO$4Kc5TFF",
  {
    host: "nicknameinfotech.com",
    dialect: "mysql",
    logging: false,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
