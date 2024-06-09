import { prismaClient } from "../config/prisma";
import errorMethod from "./responseMethod";
import { EmployeeBody } from "../models/employeeModel";

const methods = {
  async getAllEmployee() {
    return new Promise(async (resolve, reject) => {
      try {
        const list = await prismaClient.eMPLOYEE.findMany({
          select: {
            uuid: true,
            first_name: true,
            last_name: true,
            gender: true,
            birth_day: true,
            address: true,
            sub_district: true,
            district: true,
            province: true,
            expired_id_card: true,
            created_date: true,
            updated_date: true,
          },
        });
        resolve(list);
      } catch (err: any) {
        console.log(err);
        reject(err);
      }
    });
  },
  async getEmployee(employee_uuid: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const get = await prismaClient.eMPLOYEE.findUnique({
          where: {
            uuid: employee_uuid,
          },
        });
        resolve(get);
      } catch (err: any) {
        console.log(err);
        reject(err);
      }
    });
  },
  async createEmployee(data: EmployeeBody) {
    return new Promise(async (resolve, reject) => {
      try {
        const { id, ...create } = await prismaClient.eMPLOYEE.create({
          data: data,
        });
        resolve(create);
      } catch (err: any) {
        console.log(err);
        reject(err);
      }
    });
  },
  async updateEmployee(data: EmployeeBody) {
    return new Promise(async (resolve, reject) => {
      try {
        const { id, ...update } = await prismaClient.eMPLOYEE.update({
          where: {
            uuid: data?.uuid,
          },
          data: data,
        });
        resolve(update);
      } catch (err: any) {
        console.log(err);
        reject(err);
      }
    });
  },
  async deleteEmployee(employee_uuid: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const delete_employee = await prismaClient.eMPLOYEE.delete({
          where: {
            uuid: employee_uuid,
          },
        });
        resolve(delete_employee);
      } catch (err: any) {
        console.log(err);
        reject(err);
      }
    });
  },
};

export default { ...methods };
