"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersService_1 = __importDefault(require("./usersService"));
const authService_1 = __importDefault(require("./authService"));
class UseCases {
    constructor() {
        this.UsersService = usersService_1.default;
        this.AuthService = authService_1.default;
    }
}
exports.default = new UseCases();
