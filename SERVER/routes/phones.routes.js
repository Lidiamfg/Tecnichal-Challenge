const router = require("express").Router();
const phonesJson = require("../data/phones.json");

router.get("/", (req, res) => {
  try {
    res.json(phonesJson);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", (req, res) => {
  res.json;
});

module.exports = router;
