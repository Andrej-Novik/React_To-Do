import express from "express";
import usersRoutes from "./users";

const app = (express.Application = express());
app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use("/api/users", usersRoutes);

export default app;
