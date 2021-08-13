import dotenv from "dotenv";

import { connection } from "./config/dbConnection.js";

import express from "express";

import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
