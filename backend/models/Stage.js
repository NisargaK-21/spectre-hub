const mongoose = require("mongoose");

const StageSchema = new mongoose.Schema({

  title: String,

  slug: String,

  description: String,

  theory: String,

  syntax: [String],

  examples: [String],

  quiz: [
    {
      question: String,
      options: [String],
      answer: Number,
    }
  ],

  challenge: String,

  starterCode: String,

  difficulty: String,

  xp: Number,

});

module.exports = mongoose.model("Stage", StageSchema);