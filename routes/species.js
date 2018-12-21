const express = require("express");
const router = express.Router();
const {
  getAllSpecies,
  getSingleSpecie,
  addSpecie
} = require("../db/speciesQ.js");

router.get("/", getAllSpecies);
router.get("/:id", getSingleSpecie);
router.post("/", addSpecie);

module.exports = router;
