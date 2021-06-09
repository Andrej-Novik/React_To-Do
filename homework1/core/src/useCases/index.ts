import UsersService from "./usersService"
import AuthService from "./authService"


class UseCases {
	UsersService;
	AuthService;
  constructor() {
		this.UsersService = UsersService;
		this.AuthService = AuthService;
  }
}
export default new UseCases();
