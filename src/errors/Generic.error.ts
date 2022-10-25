import CustomError from "../CustomError";

export default class GenericError extends CustomError {
  static type: "GenericError";
}