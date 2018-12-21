const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const researchers = require("./routes/researchers.js");
const species = require("./routes/species.js");
const animals = require("./routes/animals.js");
const habitats = require("./routes/habitats.js");
const taggings = require("./routes/taggings.js");
const sightings = require("./routes/sightings.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/researchers", researchers);
app.use("/species", species);
app.use("/animals", animals);
app.use("/habitats", habitats);
app.use("/taggings", taggings);
app.use("/sightings", sightings);

app.get("/", (req, res) => {
  res.json("Marine Biology");
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: "404 ERROR",
    message: "ROUTE DOES NOT EXIST!"
  });
});

app.listen(5000, () => {
  console.log("LETS DO THIS");
});
