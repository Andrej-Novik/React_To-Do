"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../repository/database/users"));
class UsersService {
    constructor() {
        this.getList = async () => {
            const { value, error } = await users_1.default.getList();
            if (error)
                return { error: error };
            return { value: value };
        };
        this.deleteUser = async (id) => {
            const { value, error } = await users_1.default.deleteUser(id);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.createUser = async (firstName, lastName) => {
            const { value, error } = await users_1.default.createUser(firstName, lastName);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.editUser = async (id, firstName, lastName) => {
            const { value, error } = await users_1.default.editUser(id, firstName, lastName);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getUser = async (id) => {
            const { value, error } = await users_1.default.getUser(id);
            if (error)
                return { error: error };
            return { value: value };
        };
    }
}
exports.default = new UsersService();
