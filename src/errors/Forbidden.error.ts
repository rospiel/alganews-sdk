import CustomError from "../CustomError";

export default class ForbiddenError extends CustomError {
  static type: "ForbiddenError";
}