const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marinebio");

const getAllSpecies = (req, res) => {
  db.any("SELECT * FROM species").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT SPECIES!"
    });
  });
};

const getSingleSpecie = (req, res) => {
  let speId = parseInt(req.params.id);
  db.any("SELECT * FROM species WHERE id=$1", [speId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT A SINGLE SPECIE!"
    });
  });
};

const addSpecie = (req, res) => {
  db.none(
    "INSERT INTO species(name, is_mammal) VALUES(${name}, ${is_mammal})",
    req.body
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "ADDED A SPECIE!"
    });
  });
};

module.exports = {
  getAllSpecies,
  getSingleSpecie,
  addSpecie
};
