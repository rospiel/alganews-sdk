import { AlgaNews } from "./@types";

export type ErrorData = AlgaNews.components["schemas"]["Problem"];
export type ErrorType = 
  "ForbiddenError" 
  | "InvalidDataError"
  | "SystemError"
  | "InvalidParameterError"
  | "ResourceNotFoundError"
  | "BusinessError"
  | "GenericError"
  | "IncomprehensibleMessageError";

class CustomError {
  static type: ErrorType;

  message?: string
  data?: ErrorData;

  constructor(data: ErrorData) {
    this.message = data.userMessage || data.detail;
    this.data = data;
  }
}

export default CustomError;