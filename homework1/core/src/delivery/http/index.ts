import express, { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import usersRoutes from "./users";
import authRoutes from "./auth";
import UseCases from "../../useCases";

const app = (express.Application = express());
app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use("/api/auth", authRoutes);

app.use(async (req: Request, res: Response, next: NextFunction) => {
  const { value, error } = await UseCases.AuthService.validateUser(
    req.headers.authorization
  );

  if (error) {
    res.status(401).json(error || new Error("UC undefined error"));
    return;
  }
  req.user = value;
  next();
});
app.use("/api/users", usersRoutes);

export default app;
