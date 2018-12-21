const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marinebio");

const getAllSightings = (req, res) => {
  db.any("SELECT * FROM sightings").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT SIGHTINGS!"
    });
  });
};

const getSingleSighting = (req, res) => {
  let sigId = parseInt(req.params.id);
  db.any("SELECT * FROM sightings WHERE id=$1", [sigId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT A SINGLE SIGHTING!"
    });
  });
};

const getSightingBySpecie = (req, res) => {
  let speId = parseInt(req.params.id);
  db.any("SELECT * FROM sightings WHERE species_id=$1", [speId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "GOT SIGHTINGS BY SPECIES"
    });
  });
};

const getSightingByResearcher = (req, res) => {
  let resId = parseInt(req.params.id);
  db.any("SELECT * FROM sightings WHERE researchers_id=$1", [resId]).then(
    data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "GOT SIGHTINGS BY RESEACHERS"
      });
    }
  );
};

const getSightingByHabitat = (req, res) => {
  let habId = parseInt(req.params.id);
  db.any("SELECT * FROM sightings WHERE habitats_id=$1", [habId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "GOT SIGHTING BY HABITAT"
    });
  });
};

const addSighting = (req, res) => {
  db.none(
    "INSERT INTO sightings(researchers_id, species_id, habitats_id) VALUES(${researchers_id}, ${species_id}, ${habitats_id})",
    req.body
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "ADDED A SIGHTING!"
    });
  });
};

const deleteSighting = (req, res) => {
  let sigId = parseInt(req.params.id);
  db.result("DELETE FROM sightings WHERE id=$1", [sigId]).then(result => {
    res.status(200).json({
      status: "Success",
      message: "DELETED!",
      result: result
    });
  });
};

module.exports = {
  getAllSightings,
  getSingleSighting,
  getSightingBySpecie,
  getSightingByResearcher,
  getSightingByHabitat,
  addSighting,
  deleteSighting
};
