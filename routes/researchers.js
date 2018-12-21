const express = require("express");
const router = express.Router();
const {
  getAllResearchers,
  getSingleResearcher,
  addResearcher,
  editResearcher,
  deleteResearcher
} = require("../db/researchersQ.js");

router.get("/", getAllResearchers);
router.get("/:id", getSingleResearcher);
router.post("/", addResearcher);
router.put("/:id", editResearcher);
router.delete("/:id", deleteResearcher);

module.exports = router;
