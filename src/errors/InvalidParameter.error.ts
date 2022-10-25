import CustomError from "../CustomError";

export default class InvalidParameterError extends CustomError {
  static type: "InvalidParameterError";
}