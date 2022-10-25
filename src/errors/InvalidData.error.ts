import CustomError from "../CustomError";

export default class InvalidDataError extends CustomError {
  static type: "InvalidDataError";
}