module.exports = {
  title: "Next.js",

  slug: "nextjs",

  description: "Full Stack React Framework",

  theory:
    "Next.js is a React framework that helps developers build fast, scalable, and production-ready web applications. It provides powerful features such as file-based routing, server-side rendering (SSR), static site generation (SSG), API routes, image optimization, and performance enhancements. Next.js simplifies full-stack development by allowing both frontend and backend code to exist in the same project.",

  syntax: [

    "export default function Home() {\n  return <h1>Hello Next.js</h1>;\n}",

    "import Link from 'next/link';",

    "import Image from 'next/image';",

    "export default function About() {\n  return <h2>About Page</h2>;\n}"

  ],

  examples: [

    "export default function Home() {\n  return <h1>Welcome to Spectre-Hub</h1>;\n}",

    "import Link from 'next/link';\n\n<Link href='/profile'>Profile</Link>",

    "import Image from 'next/image';\n\n<Image src='/logo.png' width={200} height={200} alt='Logo' />"

  ],

  quiz: [

    {

      question: "Next.js is primarily built on which JavaScript library?",

      options: [

        "Angular",

        "Vue",

        "React",

        "Svelte"

      ],

      answer: 2

    }

  ],

  challenge:

    "Create a Next.js Home page that displays a heading, a paragraph, and a navigation link to an About page using the Link component.",

  starterCode:

`import Link from "next/link";

export default function Home() {

  return (

    <main>

      <h1>Welcome to Next.js</h1>

      <p>Start building your application here.</p>

      {/* Add a Link to /about */}

    </main>

  );

}`,

  difficulty: "Medium",

  xp: 100

};