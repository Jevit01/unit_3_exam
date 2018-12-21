const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marinebio");

const getAllHabitats = (req, res) => {
  db.any("SELECT * FROM habitats").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT HABITATS!"
    });
  });
};

const getSingleHabitat = (req, res) => {
  let tatId = parseInt(req.params.id);
  db.any("SELECT * FROM habitats WHERE id=$1", [tatId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT A SINGLE HABITAT!"
    });
  });
};

const addHabitat = (req, res) => {
  db.none("INSERT INTO habitats(category) VALUES(${category})", req.body).then(
    () => {
      res.status(200).json({
        status: "Success",
        message: "ADDED A HABITAT!"
      });
    }
  );
};

module.exports = {
  getAllHabitats,
  getSingleHabitat,
  addHabitat
};
