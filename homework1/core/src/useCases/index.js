const UsersService = require("./usersService");

class UseCases {
  UsersService;
  constructor() {
    this.UsersService = UsersService;
  }
}
module.exports = new UseCases();
