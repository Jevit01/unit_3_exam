const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/marinebio");

const getAllResearchers = (req, res) => {
  db.any("SELECT * FROM researchers").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT RESEACHERS!"
    });
  });
};

const getSingleResearcher = (req, res) => {
  let likeId = parseInt(req.params.id);
  db.any("SELECT * FROM researchers WHERE id=$1", [likeId]).then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT A SINGLE RESEACHER!"
    });
  });
};

const addResearcher = (req, res) => {
  db.none(
    "INSERT INTO researchers(name, job_title) VALUES(${name}, ${job_title})",
    req.body
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "ADDED A RESEACHER!"
    });
  });
};

const editResearcher = (req, res) => {
  db.none(
    "UPDATE researchers SET name=${name}, job_title=${job_title} WHERE id=${id}",
    {
      name: req.body.name,
      job_title: req.body.job_title,
      id: parseInt(req.params.id)
    }
  ).then(() => {
    res.status(200).json({
      status: "Success",
      message: "EDIT THAT RESEARCHER!"
    });
  });
};

const deleteResearcher = (req, res) => {
  let resId = parseInt(req.params.id);
  db.result("DELETE FROM researchers WHERE id=$1", [resId]).then(result => {
    res.status(200).json({
      status: "Success",
      message: "DELETED!",
      result: result
    });
  });
};

module.exports = {
  getAllResearchers,
  getSingleResearcher,
  addResearcher,
  editResearcher,
  deleteResearcher
};
