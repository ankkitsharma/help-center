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

    if (title === undefined || description === undefined) {
      return res.status(400).json({
        message: "title or description is undefined",
      });
    }

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

export const getAllCards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cards = await pool.query("SELECT * FROM card");
    if (cards.rowCount === 0) {
      return res.status(404).json({
        message: "No Cards available to fetch",
      });
    } else {
      return res.status(200).json({
        message: "cards fetched successfully",
        cards: cards.rows,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const title = req.params.title;
    const card = await pool.query(
      `SELECT * FROM card WHERE title = '${title}'`
    );
    if (card) {
      return res.status(200).json({
        message: `card with the title: ${title}, fetched successfully`,
        card: card.rows,
      });
    } else {
      return res
        .status(404)
        .json({ message: `card with title ${title} not found` });
    }
  } catch (error) {
    next(error);
  }
};
