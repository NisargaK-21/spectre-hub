module.exports = {
  title: "React",

  slug: "react",

  description: "Component Based UI",

  theory:
    "React is a JavaScript library used to build fast and interactive user interfaces. It allows developers to create reusable components and efficiently update the UI whenever data changes.",

  syntax: [

    "function App() {\n  return <h1>Hello React</h1>;\n}",

    "const element = <h1>Welcome</h1>;",

    "export default App;"

  ],

  examples: [

    "function Welcome() {\n  return <h2>Welcome to React</h2>;\n}",

    "function Button() {\n  return <button>Click Me</button>;\n}",

    "function App() {\n  return (\n    <div>\n      <Welcome />\n      <Button />\n    </div>\n  );\n}"

  ],

  quiz: [

    {
      question: "What is React mainly used for?",

      options: [

        "Building User Interfaces",

        "Managing Databases",

        "Creating Operating Systems",

        "Writing CSS"

      ],

      answer: 0

    }

  ],

  challenge:

    "Create a React component named Greeting that displays 'Hello React!' inside an h1 tag, then render it inside the App component.",

  starterCode:

`function Greeting() {

  // Write your code here

}

export default function App() {

  return (
    <div>

    </div>
  );

}`,

  difficulty: "Medium",

  xp: 100
};