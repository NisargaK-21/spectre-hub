module.exports = {

  title: "CSS",

  slug: "css",

  description: "Introduction to CSS",

  theory:
    "CSS (Cascading Style Sheets) is used to style and design web pages. It controls colors, fonts, spacing, layouts, animations, and responsiveness. While HTML provides the structure of a webpage, CSS makes it visually attractive and user-friendly.",

  syntax: [

    "color: red;",

    "background-color: black;",

    "font-size: 20px;",

    "margin: 10px;",

    "padding: 20px;",

    "display: flex;",

    "justify-content: center;",

    "align-items: center;",

    "border: 2px solid white;",

    "border-radius: 10px;"

  ],

  examples: [

`h1 {
  color: blue;
}`,

`p {
  font-size: 18px;
}`

  ],

  quiz: [

    {

      question: "What does CSS stand for?",

      options: [

        "Computer Style Sheets",

        "Creative Style System",

        "Cascading Style Sheets",

        "Colorful Style Sheets"

      ],

      answer: 2

    }

  ],

  challenge:

    "Style a webpage by changing the heading color, paragraph font size, adding padding, margin, and a background color.",

  starterCode:

`<!DOCTYPE html>
<html>
<head>

<style>

body{

}

h1{

}

p{

}

</style>

</head>

<body>

<h1>Welcome</h1>

<p>Hello Spectre-Hub</p>

</body>

</html>`,

  difficulty: "Easy",

  xp: 50

};