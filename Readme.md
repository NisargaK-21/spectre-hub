<div align="center">

# SPECTRE-HUB

### Learn Web Development 

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=8A2BE2&center=true&vCenter=true&width=600&lines=HTML+%E2%86%92+CSS+%E2%86%92+JavaScript+%E2%86%92+React;Next.js+%E2%86%92+Node.js+%E2%86%92+Express+%E2%86%92+MongoDB;AI-Reviewed+Code+with+Gemini+%26+Grok;Learn.+Build.+Survive+the+Curriculum." alt="Typing SVG" />

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-8A2BE2?style=for-the-badge)](https://spectre-hub-frontend.vercel.app/)
[![License](https://img.shields.io/github/license/your-username/spectre-hub?style=for-the-badge&color=blueviolet)](#-license)
[![Last Commit](https://img.shields.io/github/last-commit/your-username/spectre-hub?style=for-the-badge&color=purple)](#)
[![Repo Size](https://img.shields.io/github/repo-size/your-username/spectre-hub?style=for-the-badge&color=6f42c1)](#)
[![Top Language](https://img.shields.io/github/languages/top/your-username/spectre-hub?style=for-the-badge&color=7c3aed)](#)

[![Stars](https://img.shields.io/github/stars/your-username/spectre-hub?style=social)](#)
[![Forks](https://img.shields.io/github/forks/your-username/spectre-hub?style=social)](#)
[![Issues](https://img.shields.io/github/issues/your-username/spectre-hub?style=flat-square&color=purple)](#)

<img src="https://profile-counter.glitch.me/spectre-hub/count.svg" alt="Visitor Count" />

</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/lightning.gif" width="100%">
</p>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Why Spectre-Hub](#-why-spectre-hub)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Application Workflow](#-application-workflow)
- [AI Review Flow](#-ai-review-flow)
- [Project Structure](#-project-structure)
- [MongoDB Collections](#-mongodb-collections)
- [Backend Responsibilities](#-backend-responsibilities)
- [Middleware & API Access](#-middleware--api-access)
- [Why MongoDB](#-why-mongodb)
- [Future Enhancements](#-future-enhancements)
- [Back to Top](#-spectre-hub)

---

## 🕯️ About the Project

> **Spectre-Hub** is an AI-powered web development learning platform designed to teach modern web development — from **HTML to Deployment** — through an immersive learning experience.

Unlike traditional learning platforms, Spectre-Hub first teaches concepts with **detailed explanations, syntax, examples, and quizzes** before assessing the learner with hands-on coding challenges. Every submitted solution is reviewed by **Gemini AI** , providing personalized feedback, improvements, and suggestions.

The platform tracks each learner's progress, allowing them to continue learning seamlessly while building a complete web development roadmap.

<div align="center">

### 🔗 [**Try the Live Demo →**](https://spectre-hub-frontend.vercel.app/)

</div>

---

## 🌟 Why Spectre-Hub

<table>
<tr>
<td width="33%" valign="top">

### 📚 Theory First
Every stage begins with complete theory, syntax references, and practical examples before any coding is required.

</td>
<td width="33%" valign="top">

### 🧠 AI-Powered Review
Submitted code is reviewed by **Gemini AI / Grok AI**, giving bug detection, best-practice suggestions, and code quality analysis.

</td>
<td width="33%" valign="top">

### 📊 Progress Tracking
A complete learning history — completed stages, AI review history, and profile progress — all in one place.

</td>
</tr>
</table>

---

## ✨ Features

<table>
<tr>
<th>Category</th>
<th>Details</th>
</tr>
<tr>
<td><b>🔐 Authentication</b></td>
<td>Firebase Authentication • Email & Password Login • Secure Signup • Persistent User Sessions</td>
</tr>
<tr>
<td><b>🎓 Learning Platform</b></td>
<td>HTML • CSS • JavaScript • React • Next.js • Node.js • Express.js • MongoDB • Firebase • REST APIs • Deployment</td>
</tr>
<tr>
<td><b>📦 Every Learning Stage Includes</b></td>
<td>Complete Theory • Syntax Reference • Practical Examples • Interactive Quiz • Coding Assessment • AI Code Review • Personalized Suggestions</td>
</tr>
<tr>
<td><b>🤖 AI Features</b></td>
<td>Code Review (Gemini AI / Grok AI) • Bug Detection • Best Practice Suggestions • Code Quality Analysis • Learning Feedback</td>
</tr>
<tr>
<td><b>👤 User Features</b></td>
<td>User Profile • Progress Tracking • Completed Stages • Learning History • AI Review History</td>
</tr>
</table>

---

## 🧰 Tech Stack

<div align="center">

### Frontend
![Next.js](https://skillicons.dev/icons?i=nextjs) ![React](https://skillicons.dev/icons?i=react) ![Tailwind CSS](https://skillicons.dev/icons?i=tailwind) ![JavaScript](https://skillicons.dev/icons?i=js)

`Next.js` &nbsp;•&nbsp; `React` &nbsp;•&nbsp; `Tailwind CSS` &nbsp;•&nbsp; `Axios` &nbsp;•&nbsp; `Monaco Editor`

### Backend
![Node.js](https://skillicons.dev/icons?i=nodejs) ![Express](https://skillicons.dev/icons?i=express)

`Node.js` &nbsp;•&nbsp; `Express.js`

### Database
![MongoDB](https://skillicons.dev/icons?i=mongodb)

`MongoDB` &nbsp;•&nbsp; `Mongoose`

### Authentication
![Firebase](https://skillicons.dev/icons?i=firebase)

`Firebase Authentication`

### AI
`Gemini API` &nbsp;•&nbsp; `Grok API`

</div>

---

## 🏗️ Architecture

```mermaid
graph TD
    A[Frontend - Next.js / React] -->|Axios Requests| B[Backend - Express.js]
    B --> C[(MongoDB - Stages & Progress)]
    B --> D[Gemini AI]
    B --> E[Grok AI]
    A -->|Auth| F[Firebase Authentication]
    F -->|Verified Token| B

    style A fill:#8A2BE2,color:#fff
    style B fill:#4B0082,color:#fff
    style C fill:#2E8B57,color:#fff
    style D fill:#6f42c1,color:#fff
    style E fill:#6f42c1,color:#fff
    style F fill:#FFA500,color:#000
```

---

## 🔄 Application Workflow

```mermaid
flowchart TD
    Start([User Opens Spectre-Hub]) --> LoggedIn{Already Logged In?}
    LoggedIn -- No --> Auth[Signup / Login]
    LoggedIn -- Yes --> Home[Home Page]
    Auth --> FBAuth[Firebase Authentication]
    FBAuth --> Session[User Session Created]
    Session --> Home
    Home --> Select[Select Learning Stage]
    Select --> Request[Frontend Requests Stage]
    Request --> Backend[Express Backend]
    Backend --> DB[(MongoDB)]
    DB --> Content[Return Lesson Content]
    Content --> Display["Frontend Displays:<br/>Theory • Syntax • Examples • Quiz • Code Editor"]
    Display --> Submit[User Submits Code]
    Submit --> Backend2[Express Backend]
    Backend2 --> FetchStage[(Fetch Stage Data - MongoDB)]
    Backend2 --> AIReview[Gemini / Grok Review Code]
    FetchStage --> SaveProgress[Save User Progress]
    AIReview --> SaveProgress
    SaveProgress --> Feedback[Return AI Feedback]
    Feedback --> ShowReview[Display Review]
```

---

## 🧪 AI Review Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend (Express)
    participant P as Prompt Builder
    participant AI as Gemini / Grok
    participant DB as MongoDB

    U->>F: Submit Code
    F->>B: Send Code to Backend
    B->>P: Build AI Prompt
    P->>AI: Send Prompt
    AI-->>B: Return AI Feedback
    B->>DB: Save Progress
    B-->>F: Return AI Feedback
    F-->>U: Display Review
```

---

## 📂 Project Structure

<details>
<summary><b>Click to expand full folder tree</b></summary>

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
│   └── services/
│         ├── api.js                           # Backend API Calls
│         └── firebase.js                      # Firebase Configuration
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

</details>

---

## 🗄️ MongoDB Collections

<table>
<tr>
<td width="50%" valign="top">

### 📘 Stages
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

</td>
<td width="50%" valign="top">

### 📗 Progress
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

</td>
</tr>
</table>

---

## ⚙️ Backend Responsibilities

<details>
<summary><b>📄 stage.js</b></summary>

- Fetching learning stages
- Returning lesson content
- Receiving submitted code
- Calling Gemini/Grok
- Saving progress

</details>

<details>
<summary><b>📄 user.js</b></summary>

- Returning profile information
- Returning completed stages
- Returning progress history

</details>

---

## 🔒 Middleware & API Access

> Firebase Authentication middleware protects private APIs.

```mermaid
graph LR
    subgraph Protected APIs
    A[Profile]
    B[Progress]
    C[Code Submission]
    end

    subgraph Public APIs
    D[View Stages - Optional]
    E[Landing Page]
    end

    F[Firebase Auth Middleware] --> A
    F --> B
    F --> C
```

| API Type | Endpoints |
|----------|-----------|
| 🔐 **Protected** | Profile, Progress, Code Submission |
| 🌍 **Public** | View Stages (Optional), Landing Page |

---

## 🧭 Why MongoDB?

> MongoDB stores all application data **except authentication**.

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

## 🚀 Future Enhancements

> The following are planned ideas and are **not yet implemented**.

- [ ] Boss Battles
- [ ] XP System
- [ ] Daily Challenges
- [ ] Achievements
- [ ] AI Mentor
- [ ] Dark Mode Themes
- [ ] Streak Tracking
- [ ] Coding assessment

---

<div align="center">

### Learn Web Development. Survive the Curriculum.

[![Live Demo](https://img.shields.io/badge/🌐_Visit_Spectre--Hub-8A2BE2?style=for-the-badge)](https://spectre-hub-frontend.vercel.app/)

[⬆ Back to Top](#-spectre-hub)

</div>
