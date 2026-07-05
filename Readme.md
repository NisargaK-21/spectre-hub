# Spectre-Hub

> **Learn Web Development Through a Horror-Themed Adventure.**

Spectre-Hub is an AI-powered web development learning platform designed to teach modern web development from **HTML to Deployment** through an immersive horror-themed experience.

Unlike traditional learning platforms, Spectre-Hub first teaches concepts with detailed explanations, syntax, examples, and quizzes before assessing the learner with coding challenges. Every submitted solution is reviewed by **Gemini AI** or **Grok AI**, providing personalized feedback, improvements, and suggestions.

The platform tracks each learner's progress, allowing them to continue learning seamlessly while building a complete web development roadmap.

---

# Features

## Authentication

- Firebase Authentication
- Email & Password Login
- Secure Signup
- Persistent User Sessions

---

## Learning Platform

- HTML
- CSS
- JavaScript
- React
- Next.js
- Node.js
- Express.js
- MongoDB
- Firebase
- REST APIs
- Deployment

---

## Every Learning Stage Includes

- Complete Theory
- Syntax Reference
- Practical Examples
- Interactive Quiz
- Coding Assessment
- AI Code Review
- Personalized Suggestions

---

## AI Features

- Code Review using Gemini AI / Grok AI
- Bug Detection
- Best Practice Suggestions
- Code Quality Analysis
- Learning Feedback

---

## User Features

- User Profile
- Progress Tracking
- Completed Stages
- Learning History
- AI Review History

---

# Tech Stack

## Frontend

- Next.js
- React
- Tailwind CSS
- Axios
- Monaco Editor

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- Firebase Authentication

## AI

- Gemini API
- Grok API

---

# Project Structure

```text
spectre-hub/
│
├── frontend/                                  # Next.js Frontend
│
│   ├── app/                                   # Application Pages
│   │
│   │   ├── page.js                            # Landing Page / Home
│   │
│   │   ├── login/
│   │   │     └── page.js                      # User Login
│   │
│   │   ├── signup/
│   │   │     └── page.js                      # User Signup
│   │
│   │   ├── profile/
│   │   │     └── page.js                      # User Profile & Progress
│   │
│   │   └── stages/
│   │         └── [slug]/
│   │               └── page.js                # Dynamic Learning Stage
│   │
│   ├── components/                            # Reusable UI Components
│   │
│   │   ├── Navbar.js                          # Navigation Bar
│   │   ├── Footer.js                          # Footer
│   │   ├── Button.js                          # Reusable Button
│   │   ├── Loader.js                          # Loading Spinner
│   │   ├── Card.js                            # Generic Card Component
│   │   ├── Lesson.js                          # Lesson Viewer
│   │   ├── SyntaxBox.js                       # Syntax Display
│   │   ├── ExampleBox.js                      # Code Examples
│   │   ├── Quiz.js                            # Quiz Component
│   │   ├── CodeEditor.js                      # Monaco Code Editor
│   │   ├── AIReview.js                        # AI Review UI
│   │   └── ProgressBar.js                     # User Progress
│   │
│   ├── context/
│   │     └── AuthContext.js                   # Firebase Authentication Context
│   │
│   ├── services/
│   │     ├── api.js                           # Backend API Calls
│   │     └── firebase.js                      # Firebase Configuration
│   │
│   └── utils/
│         ├── helpers.js                       # Helper Functions
│         └── constants.js                     # Application Constants
│
│
├── backend/                                   # Express Backend
│
│   ├── server.js                              # Backend Entry Point
│   │
│   ├── config/
│   │     ├── db.js                            # MongoDB Connection
│   │     └── ai.js                            # Gemini / Grok Configuration
│   │
│   ├── models/
│   │     ├── Stage.js                         # Learning Stages Schema
│   │     └── Progress.js                      # User Progress Schema
│   │
│   ├── routes/
│   │     ├── stage.js                         # Stage APIs & AI Review
│   │     └── user.js                          # User Profile & Progress APIs
│   │
│   ├── middleware/
│   │     └── firebaseAuth.js                  # Firebase Token Verification
│   │
│   └── utils/
│         └── promptBuilder.js                 # Builds AI Prompt
│
└── README.md
```

---

# Application Workflow

```text
User Opens Spectre-Hub
          │
          ▼
Already Logged In?
          │
     ┌────┴────┐
     │         │
    No        Yes
     │         │
     ▼         ▼
 Signup/Login  Home
     │
     ▼
 Firebase Authentication
     │
     ▼
 User Session Created
     │
     ▼
 Home Page
     │
     ▼
 Select Learning Stage
     │
     ▼
 Frontend Requests Stage
     │
     ▼
 Express Backend
     │
     ▼
 MongoDB
(Return Lesson Content)
     │
     ▼
 Frontend Displays

 • Theory
 • Syntax
 • Examples
 • Quiz
 • Code Editor

     │
     ▼
 User Submits Code
     │
     ▼
 Express Backend
     │
     ├────────────► MongoDB
     │             Fetch Stage Data
     │
     └────────────► Gemini / Grok
                   Review Code
     │
     ▼
 Save User Progress
     │
     ▼
 Return AI Feedback
     │
     ▼
 Display Review
```

---

# MongoDB Collections

## Stages

Stores all learning content.

```text
Title
Slug
Description
Theory
Syntax
Examples
Quiz
Starter Code
Difficulty
XP Reward
```

---

## Progress

Stores every user's learning progress.

```text
Firebase UID
Stage
Submitted Code
AI Feedback
Score
Completed
Last Attempt
```

---

# Backend Responsibilities

## stage.js

Responsible for:

- Fetching learning stages
- Returning lesson content
- Receiving submitted code
- Calling Gemini/Grok
- Saving progress

---

## user.js

Responsible for:

- Returning profile information
- Returning completed stages
- Returning progress history

---

# Middleware

Firebase Authentication middleware protects private APIs.

Protected APIs

- Profile
- Progress
- Code Submission

Public APIs

- View Stages (Optional)
- Landing Page

---

# AI Review Flow

```text
User Code
      │
      ▼
Backend
      │
      ▼
Prompt Builder
      │
      ▼
Gemini / Grok
      │
      ▼
AI Feedback
      │
      ▼
Save Progress
      │
      ▼
Frontend Displays Review
```

---

# Why MongoDB?

MongoDB stores all application data except authentication.

It stores:

- Learning Stages
- Lesson Content
- Examples
- Quizzes
- User Progress
- AI Feedback
- Submitted Code

Authentication is completely managed by **Firebase Authentication**, making the backend simpler and more secure.

---

# Future Enhancements

- Horror Story Campaign
- Boss Battles
- XP System
- Daily Challenges
- Achievements
- Certificates
- Leaderboards
- AI Mentor
- Discussion Forum
- Dark Mode Themes
- Custom Avatars
- Streak Tracking
- Multiplayer Coding Battles