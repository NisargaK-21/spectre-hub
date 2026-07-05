module.exports = {
  title: "REST APIs",

  slug: "rest-api",

  description: "Building RESTful APIs",

  theory:
    "REST (Representational State Transfer) is an architectural style used for designing web APIs. REST APIs allow different applications to communicate with each other over HTTP. A client sends requests to a server, and the server responds with data, usually in JSON format. REST APIs use HTTP methods such as GET, POST, PUT, PATCH, and DELETE to perform CRUD (Create, Read, Update, Delete) operations. In full-stack development, REST APIs act as the bridge between the frontend, backend, and database.",

  syntax: [

    "app.get('/users', (req, res) => {});",

    "app.post('/users', (req, res) => {});",

    "app.put('/users/:id', (req, res) => {});",

    "app.patch('/users/:id', (req, res) => {});",

    "app.delete('/users/:id', (req, res) => {});",

    "res.json(data);",

    "req.params.id;",

    "req.body;"

  ],

  examples: [

`app.get("/users", (req, res) => {
  res.json(users);
});`,

`app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});`,

`app.put("/users/:id", (req, res) => {
  res.send("User Updated");
});`,

`app.delete("/users/:id", (req, res) => {
  res.send("User Deleted");
});`

  ],

  quiz: [

    {

      question: "Which HTTP method is used to retrieve data from a REST API?",

      options: [

        "POST",

        "PUT",

        "GET",

        "DELETE"

      ],

      answer: 2

    }

  ],

  challenge:

    "Create an Express REST API with a GET route '/students' that returns a JSON array of student names.",

  starterCode:

`const express = require("express");

const app = express();

app.use(express.json());

// Create your GET /students route here

app.listen(5000, () => {
  console.log("Server Running...");
});`,

  difficulty: "Hard",

  xp: 125
};