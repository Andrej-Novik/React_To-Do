"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../../repository/database/users"));
class AuthService {
    constructor() {
        this.login = async (email, password) => {
            const result = {
                value: null,
                error: null,
            };
            const { value, error } = await users_1.default.getUserByFirstName(email);
            if (!value || error) {
                result.error = "User not found";
                return result;
            }
            const isPassValid = password === value.lastName;
            if (!isPassValid) {
                result.error = "Invalid password";
                return result;
            }
            const accessToken = jsonwebtoken_1.default.sign({ id: value.id }, "tokenSecret", {
                expiresIn: "1h",
            });
            const refreshToken = jsonwebtoken_1.default.sign({ id: value.id }, "tokenSecret", {
                expiresIn: "3d",
            });
            result.value = { accessToken, refreshToken };
            return result;
        };
        this.refresh = async (lastRefreshToken) => {
            const result = {
                value: null,
                error: null,
            };
            const isValid = jsonwebtoken_1.default.verify(lastRefreshToken, "tokenSecret");
            if (!isValid) {
                result.error = "incorred token";
                return result;
            }
            const userId = jsonwebtoken_1.default.decode(lastRefreshToken).id;
            const accessToken = jsonwebtoken_1.default.sign({ id: userId }, "tokenSecret", {
                expiresIn: "1h",
            });
            const refreshToken = jsonwebtoken_1.default.sign({ id: userId }, "tokenSecret", {
                expiresIn: "3d",
            });
            result.value = { accessToken, refreshToken };
            return result;
        };
        this.validateUser = async (auth) => {
            const result = {
                value: null,
                error: null,
            };
            if (!auth) {
                result.error = "Auth error";
                return result;
            }
            const token = auth.split(" ")[1];
            if (!token) {
                result.error = "Auth error";
                return result;
            }
            const decoded = jsonwebtoken_1.default.verify(token, "tokenSecret");
            result.value = decoded === null || decoded === void 0 ? void 0 : decoded.id;
            return result;
        };
    }
}
exports.default = new AuthService();
