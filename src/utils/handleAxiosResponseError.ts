import { AxiosError } from "axios";
import { ErrorData } from "../CustomError";
import { BusinessError, ERRORS, ForbiddenError, GenericError, IncomprehensibleMessageError, InvalidDataError, ResourceNotFoundError, SystemError } from "../errors";
import InvalidParameterError from "../errors/InvalidParameter.error";
import { nonNull } from "./objectUtil";

export default function handleAxiosResponseError(error: AxiosError<ErrorData>) {
  const { response } = error;
  if (nonNull(response)) {

    switch(response!.data.type) {
      case ERRORS.FORBIDDEN: {
        throw new ForbiddenError(response!.data);
      }
      case ERRORS.BUSINESS_ERROR: {
        throw new BusinessError(response!.data);
      }
      case ERRORS.INVALID_DATA: {
        throw new InvalidDataError(response!.data);
      }
      case ERRORS.INVALID_PARAMETER: {
        throw new InvalidParameterError(response!.data);
      }
      case ERRORS.INCOMPREHENSIBLE_MESSAGE: {
        throw new IncomprehensibleMessageError(response!.data);
      }
      case ERRORS.RESOURCE_NOT_FOUND: {
        throw new ResourceNotFoundError(response!.data);
      }
      case ERRORS.SYSTEM_ERROR: {
        throw new SystemError(response!.data);
      }
      default: {
        const unknownError = "Erro desconhecido";

        const errorData = {} as ErrorData;
        errorData.detail = response!.data.detail || error.message || unknownError;
        errorData.status = response!.status || 500;
        errorData.userMessage = response!.data.userMessage || response!.data.detail || unknownError;
        errorData.timestamp = response!.data.timestamp || "";
        errorData.title = response!.data.title || unknownError;
        errorData.type = GenericError.type
        
        throw new GenericError(errorData);
      }
    }
    
  }

  
  return error;
}