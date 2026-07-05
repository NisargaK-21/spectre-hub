module.exports = {
  title: "JavaScript",

  slug: "javascript",

  description: "Programming the Web",

  theory:
    "JavaScript is a programming language used to make web pages interactive. It allows you to create dynamic content, handle user events, manipulate HTML and CSS, and communicate with servers.",

  syntax: [

    "let message = 'Hello World';",

    "const pi = 3.14;",

    "function greet(name) {\n  return 'Hello ' + name;\n}",

    "console.log(message);"

  ],

  examples: [

    "let age = 20;\nconsole.log(age);",

    "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(5, 3));",

    "document.getElementById('demo').innerHTML = 'Welcome!';"

  ],

  quiz: [

    {
      question: "Which keyword is used to declare a variable in JavaScript?",

      options: [

        "var",

        "let",

        "const",

        "All of the above"

      ],

      answer: 3
    }

  ],

  challenge:

    "Create a JavaScript function named square() that accepts a number and returns its square.",

  starterCode:

`function square(num) {

  // Write your code here

}

console.log(square(5));`,

  difficulty: "Medium",

  xp: 75
};