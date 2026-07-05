module.exports = {
  title: "Firebase",

  slug: "firebase",

  description: "Authentication & Cloud Services",

  theory:
    "Firebase is a Backend-as-a-Service (BaaS) platform developed by Google. It provides developers with ready-to-use backend services such as Authentication, Firestore Database, Cloud Storage, Hosting, Analytics, and Cloud Functions. Instead of building everything from scratch, developers can use Firebase to quickly create secure and scalable web and mobile applications. In Spectre-Hub, Firebase is used for user authentication, allowing users to securely sign up, log in, and maintain their sessions.",

  syntax: [

    "import { initializeApp } from 'firebase/app';",

    "import { getAuth } from 'firebase/auth';",

    "const app = initializeApp(firebaseConfig);",

    "const auth = getAuth(app);",

    "createUserWithEmailAndPassword(auth, email, password);",

    "signInWithEmailAndPassword(auth, email, password);",

    "signOut(auth);"

  ],

  examples: [

`import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "...",
};

const app = initializeApp(firebaseConfig);`,

`import { getAuth } from "firebase/auth";

const auth = getAuth();`,

`createUserWithEmailAndPassword(
  auth,
  "user@gmail.com",
  "password123"
);`,

`signInWithEmailAndPassword(
  auth,
  "user@gmail.com",
  "password123"
);`

  ],

  quiz: [

    {

      question: "Which company developed Firebase?",

      options: [

        "Microsoft",

        "Google",

        "Meta",

        "Amazon"

      ],

      answer: 1

    }

  ],

  challenge:

    "Create a Firebase Authentication setup and implement Email & Password Signup using createUserWithEmailAndPassword().",

  starterCode:

`import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  // Add your Firebase configuration here

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);`,

  difficulty: "Easy",

  xp: 75
};