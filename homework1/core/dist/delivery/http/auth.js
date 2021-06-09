"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const useCases_1 = __importDefault(require("../../useCases"));
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const { value, error } = await useCases_1.default.AuthService.login(email, password);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.post("/refresh", async (req, res) => {
    const { refreshToken } = req.body;
    const { value, error } = await useCases_1.default.AuthService.refresh(refreshToken);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
exports.default = router;
