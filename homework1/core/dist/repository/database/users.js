"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../models/dbm/users");
const connector_1 = __importDefault(require("./connector"));
class UsersRepository {
    constructor() {
        this.getList = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(users_1.User).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getUser = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(users_1.User));
                //.find(id)
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getUserByFirstName = async (firstName) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(users_1.User).findOne({ where: { firstName } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.editUser = async (id, firstName, lastName) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(users_1.User).update(id, { firstName, lastName }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.deleteUser = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(users_1.User).delete(id));
                return { value: !!response.affected };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.createUser = async (firstName, lastName) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(users_1.User).save({ firstName, lastName }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
    }
}
exports.default = new UsersRepository();
