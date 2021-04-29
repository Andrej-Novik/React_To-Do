const express = require("express");
const router = express.Router();
const UseCases = require('../../useCases')


router.get("", async (req, res) => {
  const { value, error } = await UseCases.UsersService.getList()
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.delete("/:id", async (req, res) => {
  const { value, error } = await UseCases.UsersService.deleteUser(req.params.id)
  if (error) {
    res.status(500).json(error || new Error('UC undefined error'))
    return
  }
  res.status(200).json(value)
});

router.post("", async (req, res) => {
  const { value, error } = await UseCases.UsersService.createUser(req.params.firstName, req.params.lastName)
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.patch("/:id", async (req, res) => {
  const { value, error } = await UseCases.UsersService.editUser(req.params.id, req.params.firstName, req.params.lastName)
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
router.get("/:id", async (req, res) => {
  const { value, error } = await UseCases.UsersService.getUser(req.params.id)
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
module.exports = router;
