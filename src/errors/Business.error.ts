import CustomError from "../CustomError";

export default class BusinessError extends CustomError {
  static type: "BusinessError";
}