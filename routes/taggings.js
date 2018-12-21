const express = require("express");
const router = express.Router();
const {
  getAllTaggings,
  getSingleTagging,
  getTagsByResearcher,
  getTagsByAnimal,
  addTag
} = require("../db/taggingsQ.js");

router.get("/", getAllTaggings);
router.get("/:id", getSingleTagging);
router.get("/researchers/:id", getTagsByResearcher);
router.get("/animals/:id", getTagsByAnimal);
router.post("/", addTag);

module.exports = router;
