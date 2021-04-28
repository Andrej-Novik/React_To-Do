const express = require("express");
const usersRoutes = require("./users");

const app = (express.Application = express());
app.use(express.json({ limit: "10mb" }));

app.use("/api/users", usersRoutes);

module.exports = app;
