const mongoose = require("mongoose");
const dotenv = require("dotenv");
//Configure dotenv
dotenv.config({ path: "./config.env" });

//If any exception occurs, it will be caught here
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION Shutting Down...😓");
  console.log(err.name, err.message);
  process.exit(1);
});

//Connection to the database
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => {
  console.log("DB connection successful");
});

const app = require("./app");
const port = process.env.PORT || 8000;

const server = app.listen(port, () =>
  console.log(`App running on port ${port}...`)
);
//If any promise rejection occurs, it will be caught here
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 💥 Shutting Down...😓");
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
