import express from "express";
import * as employeeController from "../controllers/employeeController";

const router = express.Router();

router.get("/get", employeeController.getEmployee);
router.get("/get-list", employeeController.getEmployeeList);
router.post("/create", employeeController.createEmployee);
router.put("/update/(:employee_uuid)", employeeController.updateEmployee);
router.delete("/delete/(:employee_uuid)", employeeController.deleteEmployee);

export = router;
