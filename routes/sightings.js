const express = require("express");
const router = express.Router();
const {
  getAllSightings,
  getSingleSighting,
  getSightingBySpecie,
  getSightingByResearcher,
  getSightingByHabitat,
  addSighting,
  deleteSighting
} = require("../db/sightingsQ.js");

router.get("/", getAllSightings);
router.get("/:id", getSingleSighting);
router.get("/species/:id", getSightingBySpecie);
router.get("/researchers/:id", getSightingByResearcher);
router.get("/habitats/:id", getSightingByHabitat);
router.post("/", addSighting);
router.delete("/:id", deleteSighting);

module.exports = router;
