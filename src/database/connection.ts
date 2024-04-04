import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  models: [__dirname + "/models"],
});

console.log(process.env.DB_PASSWORD);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("synced !!!");
  })
  .catch((err) => {
    console.error("Error syncing models:", err);
  });

export default sequelize;
