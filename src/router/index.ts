import express from "express";
import { check } from "../controllers/check";
import employeeRouter from "./employeeRouter";

const router = express.Router();

router.get("/check", check);
router.use("/employee", employeeRouter);

export = router;
