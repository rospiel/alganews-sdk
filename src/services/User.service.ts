import { User } from "../@types";
import Service from "../Service";

class UserService extends Service {

  static readonly REQUEST_MAPPING: string = "/users";
  
  static getAllEditors() {
    return this.Http
      .get<User.EditorSummary[]>(this.REQUEST_MAPPING.concat("/editors"))
      .then(this.getData);
  }

  static getExistingEditor(editorId: number) {
    return this.Http
      .get<User.EditorDetailed>(`${this.REQUEST_MAPPING}/editors/${editorId}`)
      .then(this.getData);
  }

  static getDetailedUser(userId: number) {
    return this.Http
      .get<User.Detailed>(`${this.REQUEST_MAPPING}/${userId}`)
      .then(this.getData);
  }

  static getAllUsers() {
    return this.Http
      .get<User.Summary[]>(this.REQUEST_MAPPING)
      .then(this.getData);
  }

  static updateExistingUser(userId: number, userData: User.Input) {
    return this.Http
      .put<User.Detailed>(`${this.REQUEST_MAPPING}/${userId}`, userData)
      .then(this.getData);
  }

  static insertNewUser(userData: User.Input) {
    return this.Http
      .post<User.Detailed>(this.REQUEST_MAPPING, userData)
      .then(this.getData);
  }

  static activateExistingUser(userId: number) {
    return this.Http
      .put<{}>(`${this.REQUEST_MAPPING}/${userId}/activation`)
      .then(this.getData);
  }

  static deactivateExistingUser(userId: number) {
    return this.Http
      .delete<{}>(`${this.REQUEST_MAPPING}/${userId}/activation`)
      .then(this.getData);
  }
}

export default UserService;