module.exports = {
  title: "Express.js",

  slug: "express",

  description: "Node Backend Framework",

  theory:
    "Express.js is a lightweight web framework for Node.js that makes it easy to build web servers and REST APIs. It provides routing, middleware support, request handling, and simplifies backend development.",

  syntax: [

    "const express = require('express');",

    "const app = express();",

    "app.get('/', (req, res) => {\n  res.send('Hello World');\n});",

    "app.listen(5000);"

  ],

  examples: [

    "app.get('/users', (req, res) => {\n  res.json(['John', 'Alice']);\n});",

    "app.post('/login', (req, res) => {\n  res.send('Login Successful');\n});",

    "app.use(express.json());"

  ],

  quiz: [

    {
      question: "What is Express.js mainly used for?",

      options: [

        "Building Backend APIs",

        "Styling Web Pages",

        "Creating Mobile Apps",

        "Managing Databases"

      ],

      answer: 0

    }

  ],

  challenge:

    "Create an Express server with a GET route '/hello' that returns 'Hello Express!'.",

  starterCode:

`const express = require("express");

const app = express();

// Write your route here

app.listen(5000, () => {
  console.log("Server Running");
});`,

  difficulty: "Medium",

  xp: 100
};