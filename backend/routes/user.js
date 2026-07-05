const express = require("express");
const Progress = require("../models/Progress");

const router = express.Router();

router.get("/:uid", async (req, res) => {

  try {

    const progress = await Progress.find({
      uid: req.params.uid,
    });

    res.json(progress);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;