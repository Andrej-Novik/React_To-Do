"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users"));
const auth_1 = __importDefault(require("./auth"));
const useCases_1 = __importDefault(require("../../useCases"));
const app = (express_1.default.Application = express_1.default());
app.use(express_1.default.json());
app.use(express_1.default.json({ limit: "10mb" }));
app.use("/api/auth", auth_1.default);
app.use(async (req, res, next) => {
    const { value, error } = await useCases_1.default.AuthService.validateUser(req.headers.authorization);
    if (error) {
        res.status(401).json(error || new Error("UC undefined error"));
        return;
    }
    req.user = value;
    next();
});
app.use("/api/users", users_1.default);
exports.default = app;
