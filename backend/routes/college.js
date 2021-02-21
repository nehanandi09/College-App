const router = require("express").Router();
let College = require("../models/college.model");

router.route("/").get((req, res) => {
  College.find()
    .then((college) => res.json(college))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  College.findById(req.params.id).then((college) =>
    res.json(college).catch((err) => res.status(400).json("Error: " + err))
  );
});

module.exports = router;
