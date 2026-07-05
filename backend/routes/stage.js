const express = require("express");
const Stage = require("../models/Stage");

const router = express.Router();
const stages = require("../data/stages");


router.get("/seed", async (req, res) => {
  try {

    await Stage.deleteMany();
    await Stage.insertMany(stages);

    res.send("All stages inserted successfully.");

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
});

router.get("/", async (req, res) => {

  const stages = await Stage.find();

  res.json(stages);

});

router.get("/:slug", async (req, res) => {

  try {

    const stage = await Stage.findOne({
      slug: req.params.slug,
    });

    if (!stage) {
      return res.status(404).json({
        message: "Stage not found",
      });
    }

    res.json(stage);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;