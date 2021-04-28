const express = require("express");
const router = express.Router();

const error = undefined;
let value = [
  { id: 1, firstName: "Ivan", lastName: "Nefedov" },
  { id: 2, firstName: "Nikita", lastName: "Zalubov" },
  { id: 3, firstName: "Andrew", lastName: "Taranow" },
  { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
  { id: 5, firstName: "Artem", lastName: "Haliman" },
];

router.get("", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.delete("/:id", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
	}
	res.status(200).json(value);
});

router.post("", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.patch("/:id", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
router.get("/:id", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
module.exports = router;
