import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;

export const connection = mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((self) => {
    self.connection.name = "mernDatabase";
    console.log(
      `You have successfully connected to the DataBase : ${self.connection.name}`
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
