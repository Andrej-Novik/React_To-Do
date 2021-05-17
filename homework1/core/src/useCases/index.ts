import UsersService from "./usersService"

class UseCases {
  UsersService;
  constructor() {
    this.UsersService = UsersService;
  }
}
export default new UseCases();
