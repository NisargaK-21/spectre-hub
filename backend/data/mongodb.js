module.exports = {
  title: "MongoDB",

  slug: "mongodb",

  description: "NoSQL Database",

  theory:
    "MongoDB is a NoSQL database that stores data in flexible JSON-like documents instead of tables and rows. It is widely used in modern web development because it is fast, scalable, and easy to integrate with Node.js applications using Mongoose. MongoDB allows developers to store, retrieve, update, and delete data efficiently while handling large amounts of information.",

  syntax: [

    "mongoose.connect(process.env.MONGO_URI);",

    "const User = mongoose.model('User', userSchema);",

    "User.find();",

    "User.findById(id);",

    "User.create(data);",

    "User.updateOne({ _id: id }, data);",

    "User.deleteOne({ _id: id });"

  ],

  examples: [

`const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);`,

`const userSchema = new mongoose.Schema({
  name: String,
  email: String
});`,

`const User = mongoose.model("User", userSchema);

User.create({
  name: "John",
  email: "john@example.com"
});`

  ],

  quiz: [

    {

      question: "MongoDB stores data in which format?",

      options: [

        "Tables",

        "Rows",

        "Documents",

        "CSV Files"

      ],

      answer: 2

    }

  ],

  challenge:

    "Create a Mongoose schema for a Student containing name, email, and age. Then create a model named Student.",

  starterCode:

`const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

// Create Student Schema

// Create Student Model

module.exports = Student;`,

  difficulty: "Medium",

  xp: 100
};