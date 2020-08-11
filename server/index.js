import express from "express";
import dotenv from "dotenv";
import app from "./src/app";
import { ConnectionToDB } from "./src/config/DBConection";
const server = express();

dotenv.config();

ConnectionToDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

server.use("/api", app);

server.listen(3001, () => console.log("Server Up and Running"));
