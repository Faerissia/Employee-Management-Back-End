import { PrismaClient as PrismaClient } from "../prisma/generated/prisma-client/index.js";

export const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: `${process.env.DATABASE_URL}`,
    },
  },
});
