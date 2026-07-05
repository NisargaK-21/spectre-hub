module.exports={
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
}