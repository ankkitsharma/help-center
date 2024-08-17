import { createError } from "../utils/error";
import { Request, Response, NextFunction } from "express";
import pool from "../utils/dbConfig";

export const createCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description } = req.body;

    const createdCard = await pool.query(
      `INSERT INTO card (title, description) VALUES ('${title}', '${description}') RETURNING *`
    );

    res.status(201).json({
      message: "card created successfully",
      createdCard: createdCard.rows[0],
    });
    next();
  } catch (error) {
    next(error);
  }
};
