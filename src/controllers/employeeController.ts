import { Request, Response, response } from "express";
import { ErrorModel } from "../services/error";
import { decodeJwtToEmail } from "../services/tools";
import { prismaClient } from "../config/prisma";
import { EmployeeBody } from "../models/employeeModel";
import responseMethod from "../services/responseMethod";
import employeeService from "../services/employee.service";
import { v4 as uuidv4 } from "uuid";

export const getEmployee = async (req: Request, res: Response) => {
  const employee_uuid = String(req.query.employee_uuid);
  try {
    const result = await employeeService.getEmployee(employee_uuid);

    if (!result) return res.status(404).json("not found employee");

    res.json(responseMethod.Success("get employee", result));
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json(err);
  }
};

export const getEmployeeList = async (req: Request, res: Response) => {
  try {
    const result = await employeeService.getAllEmployee();

    res.json(responseMethod.Success("get employee", result));
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json(err);
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const data: EmployeeBody = {
      uuid: uuidv4(),
      first_name: body.first_name,
      last_name: body.last_name,
      gender: body.gender,
      birth_day: body.birth_day,
      address: body.address,
      sub_district: body.sub_district,
      district: body.district,
      province: body.province,
      expired_id_card: body.expired_id_card,
      created_date: new Date(),
      updated_date: new Date(),
    };
    const result = await employeeService.createEmployee(data);

    res.json(
      responseMethod.Success("get employee", "create employee successfully")
    );
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json(err);
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  const body = req.body;
  const uuid = req.params.employee_uuid;
  try {
    const data: EmployeeBody = {
      uuid: uuid,
      first_name: body.first_name,
      last_name: body.last_name,
      gender: body.gender,
      birth_day: body.birth_day,
      address: body.address,
      sub_district: body.sub_district,
      district: body.district,
      province: body.province,
      expired_id_card: body.expired_id_card,
      updated_date: new Date(),
    };
    const result = await employeeService.updateEmployee(data);

    res.json(
      responseMethod.Success("get employee", "update employee successfully")
    );
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json(err);
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const uuid = req.params.employee_uuid;
  try {
    if (!uuid)
      return res
        .status(400)
        .json(responseMethod.InputNotMeet("require employee_uuid"));

    const find = await employeeService.getEmployee(uuid);

    if (!find)
      return res
        .status(404)
        .json(responseMethod.NotFound("not found employee_uuid"));

    const result = await employeeService.deleteEmployee(uuid);

    res.json(
      responseMethod.Success("get employee", "delete employee successfully")
    );
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json(err);
  }
};
