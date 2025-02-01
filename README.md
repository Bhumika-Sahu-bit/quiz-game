# 🎮 Quiz Flow with Gamification

## 📌 Project Overview

This is a **web-based quiz application** with gamification features, built using **React and Vite**. It fetches quiz questions from an API and presents them in an interactive format with a timer-based challenge.

## 🚀 Features

- **Dynamic Quiz Questions** fetched from an API.
- **Multiple Choice Answers** with instant feedback.
- **Timer-based Gameplay** (10-second countdown per question).
- **Correct & Wrong Answer Highlighting**.
- **Auto-Skip on Timeout** if no answer is selected.
- **Final Score Summary** after completing the quiz.
- **Play Again Option** to restart the quiz.

## 🛠️ Technologies Used

- **React** (Frontend Framework)
- **Vite** (Faster Development Build)
- **Bootstrap** (Styling & UI Components)
- **Custom CSS** (Enhanced UI/UX Design)

## 🔗 API Endpoint

This quiz fetches questions from:

```
https://api.jsonserve.com/Uw5CrX
```

## 👅 Installation & Setup

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**

   ```sh
   git clone YOUR_GITHUB_REPOSITORY_URL
   cd quiz-flow-gamification
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run the Application:**

   ```sh
   npm run dev
   ```

4. **Open in Browser:**
   The app will be available at **[http://localhost:5173/](http://localhost:5173/)**

## 📂 Project Structure

```
📺 quiz-flow-gamification
├── 📁 src
│   ├── 📁 components
│   │   ├── Quiz.jsx  # Main Quiz Component
│   ├── 📁 service
│   │   ├── quizService.jsx  # API Fetch Function
│   ├── 📁 styles
│   │   ├── Quiz.css  # Custom Styling
├── 📄 package.json  # Project Dependencies
├── 📄 README.md  # Project Documentation
└── 📄 vite.config.js  # Vite Configuration
```

## 🎨 UI Design

### Quiz Page (`Quiz.jsx`)

#### 📌 Features:

- Displays questions with **multiple-choice options**.
- **Highlights correct and incorrect answers**.
- **Auto-advances to the next question** after selection or timeout.
- **Shows final score with an option to restart the quiz**.

##

---

### 🎉 Thank You & Happy Coding! 🚀

