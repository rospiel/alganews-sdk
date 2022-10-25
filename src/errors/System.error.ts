import CustomError from "../CustomError";

export default class SystemError extends CustomError {
  static type: "SystemError";
}