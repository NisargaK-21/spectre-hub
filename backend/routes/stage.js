const express = require("express");
const Stage = require("../models/Stage");

const router = express.Router();


router.get("/seed", async (req, res) => {
  try {

    await Stage.deleteMany();

    await Stage.insertMany([

     {
  title: "HTML",

  slug: "html",

  description: "Introduction to HTML",

  theory:
    "HTML is the standard markup language used to build web pages.",

  syntax: [

    "<h1>Hello</h1>",

    "<p>This is paragraph</p>",

    "<img src='' alt='' />"

  ],

  examples: [

    "<h1>Welcome</h1>",

    "<a href='https://google.com'>Google</a>"

  ],

  quiz: [

    {
      question: "What does HTML stand for?",

      options: [

        "Hyper Text Markup Language",

        "High Transfer Machine Language",

        "Home Tool Markup Language",

        "Hyper Transfer Markup Language"

      ],

      answer: 0

    }

  ],

  challenge:

    "Create a webpage containing one heading, one paragraph and one image.",

  starterCode:

`<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>
<body>

</body>
</html>`,

  difficulty:"Easy",

  xp:50
},

      {
        title: "CSS",
        slug: "css",
        description: "Styling Web Pages",
        difficulty: "Easy",
        xp: 50,
      },

      {
        title: "JavaScript",
        slug: "javascript",
        description: "Programming the Web",
        difficulty: "Medium",
        xp: 75,
      },

      {
        title: "React",
        slug: "react",
        description: "Component Based UI",
        difficulty: "Medium",
        xp: 100,
      },

      {
        title: "Next.js",
        slug: "nextjs",
        description: "Full Stack React Framework",
        difficulty: "Medium",
        xp: 100,
      },

      {
        title: "Node.js",
        slug: "nodejs",
        description: "Backend with JavaScript",
        difficulty: "Medium",
        xp: 100,
      },

      {
        title: "Express.js",
        slug: "express",
        description: "Node Backend Framework",
        difficulty: "Medium",
        xp: 100,
      },

      {
        title: "MongoDB",
        slug: "mongodb",
        description: "NoSQL Database",
        difficulty: "Medium",
        xp: 100,
      },

      {
        title: "Firebase",
        slug: "firebase",
        description: "Authentication & Cloud",
        difficulty: "Easy",
        xp: 75,
      },

      {
        title: "REST APIs",
        slug: "rest-api",
        description: "Building APIs",
        difficulty: "Hard",
        xp: 125,
      },

      {
        title: "Deployment",
        slug: "deployment",
        description: "Deploy Full Stack Applications",
        difficulty: "Hard",
        xp: 150,
      }

    ]);

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