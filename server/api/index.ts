// Import the express in typescript file
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import pool from "../utils/dbConfig";
import cardRouter from "../routes/cardRoutes";

config();

// Initialize the express engine
const app: express.Application = express();

// Enable middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", cardRouter);

// Take a port for running server.
const port: number = Number(process.env.PORT);

// Test pool connection with DB
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to PostgresSQL database:", err);
  } else {
    console.log("Connected to PostgreSQL database at:", res.rows[0].now);
  }
});

// Handling '/' Request
app.get("/", (_req, _res) => {
  _res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});
