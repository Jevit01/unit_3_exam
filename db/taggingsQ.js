const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marinebio");

const getAllTaggings = (req, res) => {
  db.any("SELECT * FROM taggings").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT TAGS!"
    });
  });
};

const getSingleTagging = (req, res) => {
  let tagId = parseInt(req.params.id);
  db.any("SELECT * FROM taggings WHERE id=$1", [tagId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT A SINGLE TAG!"
    });
  });
};

const getTagsByResearcher = (req, res) => {
  let resId = parseInt(req.params.id);
  db.any("SELECT * FROM taggings WHERE researchers_id=$1", [resId]).then(
    data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "GOT TAGS BY RESEARCHERS"
      });
    }
  );
};

const getTagsByAnimal = (req, res) => {
  let anId = parseInt(req.params.id);
  db.any("SELECT * FROM taggings WHERE animals_id=$1", [anId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "GOT TAGS BY ANIMALS"
    });
  });
};

const addTag = (req, res) => {
  db.none(
    "INSERT INTO taggings(animals_id, researchers_id) VALUES(${animals_id}, ${researchers_id})",
    req.body
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "ADDED A TAG!"
    });
  });
};

module.exports = {
  getAllTaggings,
  getSingleTagging,
  getTagsByResearcher,
  getTagsByAnimal,
  addTag
};
