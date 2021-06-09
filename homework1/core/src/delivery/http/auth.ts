import express from "express";
const router = express.Router();
import UseCases from "../../useCases";

router.post("/login", async (req, res) => {

  const { email, password } = req.body;
	const { value, error } = await UseCases.AuthService.login(email, password);

  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.post("/refresh", async (req, res) => {

  const { refreshToken } = req.body;
	const { value, error } = await UseCases.AuthService.refresh(refreshToken);

  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;