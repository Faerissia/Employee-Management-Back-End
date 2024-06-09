import { Request, Response } from "express";
import { prismaClient } from "../config/prisma";

export const check = async (req: Request, res: Response) => {
  try {
    const [result]: object[] = await prismaClient.$queryRaw`SELECT NOW()`;

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send(String(err));
  }
};
