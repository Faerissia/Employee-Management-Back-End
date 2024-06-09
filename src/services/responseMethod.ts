// เพิ่ม msg สำหรับเพิ่ม Details
const methods = {
  Success(service: string, data: any) {
    return {
      success: true,
      serviceName: service,
      httpStatusCode: 200,
      data: data,
    };
  },
  SuccessWithMessage(service: string, msg: string) {
    return {
      success: true,
      serviceName: service,
      httpStatusCode: 200,
      message: msg,
    };
  },
  SuccessWithPageSize(
    service: string,
    page: number,
    pageSize: number,
    data: any
  ) {
    return {
      serviceName: service,
      currentPage: page,
      totalPages: Math.ceil(data.total_item / pageSize),
      httpStatusCode: 200,
      data: data.data,
    };
  },
  SuccessWithPageSizeForPricePlan(
    service: string,
    page: number,
    pageSize: number,
    data: any
  ) {
    console.log(data.pagination);

    return {
      serviceName: service,
      currentPage: page,
      totalPages: Math.ceil(data.pagination.totalItems / pageSize),
      httpStatusCode: 200,
      data: data.data,
    };
  },
  InvalidRequest(msg: string) {
    return {
      error: {
        httpStatusCode: 400,
        code: "l4001",
        detail: "Invalid Request",
        message: msg,
      },
    };
  },
  InputNotMeet(msg: string) {
    return {
      error: {
        httpStatusCode: 400,
        code: "l4002",
        message: "Input not meet our condition",
        detail: msg,
      },
    };
  },
  Unauthorize() {
    return {
      error: {
        httpStatusCode: 401,
        code: "l4011",
        message: "Unauthorize",
      },
    };
  },
  InvalidPassword() {
    return {
      error: {
        httpStatusCode: 401,
        code: "l4012",
        message: "Invalid Password",
      },
    };
  },
  NoPermission() {
    return {
      error: {
        httpStatusCode: 401,
        code: "l403",
        message: "No Permission",
      },
    };
  },
  NotFound(msg: string) {
    return {
      error: {
        httpStatusCode: 404,
        code: "l404",
        message: "Not found",
        detail: msg,
      },
    };
  },
  RequestNotMeet() {
    return {
      httpStatusCode: 500,
      code: "E5001",
      message: "Request not meet our business condition",
    };
  },
  ErrorWhileProcessData(msg: any) {
    return {
      httpStatusCode: 500,
      code: "B5001",
      message: "Error while process data",
      detail: msg,
    };
  },
  ErrorWhileProcessLogic(msg: any) {
    return {
      error: {
        httpStatusCode: 500,
        code: "B5002",
        message: "Error while process logic",
        detail: msg,
      },
    };
  },
  DatabaseConnectError() {
    return {
      error: {
        httpStatusCode: 500,
        code: "B5003",
        message: "Database connect error",
      },
    };
  },
  CantConnectDataSource() {
    return {
      error: {
        httpStatusCode: 500,
        code: "B5004",
        message: "Can`t connect data source",
      },
    };
  },
  ThereIsSomeError() {
    return {
      error: {
        httpStatusCode: 500,
        code: "F0000",
        message: "There`s is some error",
      },
    };
  },
  TimeOutError() {
    return {
      error: {
        httpStatusCode: 504,
        code: "E504",
        message: "Timeout error",
      },
    };
  },
};

export default { ...methods };
