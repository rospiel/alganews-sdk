import CustomError from "../CustomError";

export default class ResourceNotFoundError extends CustomError {
  static type: "ResourceNotFoundError";
}