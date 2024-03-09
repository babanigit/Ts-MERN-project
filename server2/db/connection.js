const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const DB = process.env.DATABASE;

    if (!DB) {
      throw new Error("Database connection string is not provided.");
    }

    const connect = await mongoose.connect(DB);
    console.log(
      "database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.error("failed to connect to the database");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
