module.exports = {
  title: "Deployment",

  slug: "deployment",

  description: "Deploy Full Stack Applications",

  theory:
    "Deployment is the process of making your application accessible to users over the internet. After developing and testing your application locally, you deploy the frontend and backend to hosting platforms. Modern full-stack applications often use Vercel for the frontend, Render or Railway for the backend, and MongoDB Atlas as the cloud database. Deployment also involves configuring environment variables, connecting services securely, and ensuring the application works correctly in production.",

  syntax: [

    "git add .",

    "git commit -m 'Initial Deployment'",

    "git push origin main",

    "npm run build",

    "npm start",

    "process.env.PORT",

    "process.env.MONGO_URI",

    "process.env.GEMINI_API_KEY"

  ],

  examples: [

`git add .`,

`git commit -m "Deploy Application"`,

`git push origin main`,

`npm run build`,

`npm start`

  ],

  quiz: [

    {

      question: "Which platform is commonly used to deploy Next.js applications?",

      options: [

        "Vercel",

        "MongoDB Atlas",

        "Firebase Authentication",

        "Visual Studio Code"

      ],

      answer: 0

    }

  ],

  challenge:

    "Deploy your full-stack application by hosting the frontend on Vercel, the backend on Render, connect MongoDB Atlas, configure environment variables, and verify that the deployed application works correctly.",

  starterCode:

`Deployment Checklist

☐ Push project to GitHub

☐ Deploy Frontend (Vercel)

☐ Deploy Backend (Render)

☐ Configure Environment Variables

☐ Connect MongoDB Atlas

☐ Test API Endpoints

☐ Verify Authentication

☐ Verify AI Review

☐ Final Production Testing`,

  difficulty: "Hard",

  xp: 150
};