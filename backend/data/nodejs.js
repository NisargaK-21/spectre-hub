module.exports = {
  title: "Node.js",

  slug: "nodejs",

  description: "Backend with JavaScript",

  theory:
    "Node.js is a JavaScript runtime environment that allows developers to run JavaScript outside the browser. It is widely used for building fast, scalable, and efficient backend applications, APIs, real-time applications, and web servers. Node.js uses an event-driven, non-blocking architecture, making it ideal for handling multiple client requests simultaneously.",

  syntax: [

    "const http = require('http');",

    "const fs = require('fs');",

    "const path = require('path');",

    "console.log('Hello Node.js');"

  ],

  examples: [

    "console.log('Welcome to Node.js');",

    "const os = require('os');\nconsole.log(os.platform());",

    "const fs = require('fs');\nfs.writeFileSync('demo.txt', 'Hello World');"

  ],

  quiz: [

    {
      question: "What is Node.js?",

      options: [

        "A JavaScript Runtime",

        "A Database",

        "A CSS Framework",

        "A Browser"

      ],

      answer: 0

    }

  ],

  challenge:

    "Create a Node.js program that prints 'Welcome to Spectre-Hub' to the console.",

  starterCode:

`// Write your code here

console.log("Hello World");`,

  difficulty: "Medium",

  xp: 100
};