const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marinebio");

const getAllAnimals = (req, res) => {
  db.any("SELECT * FROM animals").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT ANIMALS!"
    });
  });
};

const getSingleAnimal = (req, res) => {
  let animalId = parseInt(req.params.id);
  db.any("SELECT * FROM animals WHERE species_id=$1", [animalId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT A SINGLE ANIMAL!"
    });
  });
};

const addAnimal = (req, res) => {
  db.none(
    "INSERT INTO animals(species_id, nickname) VALUES(${species_id}, ${nickname})",
    req.body
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "ADDED AN ANIMAL!"
    });
  });
};

const editAnimal = (req, res) => {
  db.none(
    "UPDATE animals SET species_id=${species_id}, nickname=${nickname} WHERE id=${id}",
    {
      species_id: req.body.species_id,
      nickname: req.body.nickname,
      id: parseInt(req.params.id)
    }
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "EDIT THAT ANIMAL!"
    });
  });
};

const deleteAnimal = (req, res) => {
  let comId = parseInt(req.params.id);
  db.result("DELETE FROM animals WHERE id=$1", [comId]).then(result => {
    res.status(200).json({
      status: "Success",
      message: "DELETED!",
      result: result
    });
  });
};

module.exports = {
  getAllAnimals,
  getSingleAnimal,
  addAnimal,
  editAnimal,
  deleteAnimal
};
