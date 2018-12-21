const express = require("express");
const router = express.Router();
const {
  getAllAnimals,
  getSingleAnimal,
  addAnimal,
  editAnimal,
  deleteAnimal
} = require("../db/animalsQ.js");

router.get("/", getAllAnimals);
router.get("/:id", getSingleAnimal);
router.post("/", addAnimal);
router.put("/:id", editAnimal);
router.delete("/:id", deleteAnimal);

module.exports = router;
