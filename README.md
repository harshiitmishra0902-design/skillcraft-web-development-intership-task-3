# skillcraft-web-development-intership-task-3

## 📄 Overview
This project is an interactive, dark-themed Quick 10 Quiz Web Application designed with sudden-death progression mechanics. Built using semantic HTML5, modern responsive CSS3, and native ES6 JavaScript, the application tests user knowledge across science, technology, geography, and general trivia through a randomized 10-question challenge.

Developed as part of the SkillCraft Technology Web Development Internship, this project demonstrates dynamic DOM updates, Fisher-Yates array shuffling algorithms, state management, and event-driven interactivity.

## ✨ Features
Randomized Question Selection: Dynamically pulls and shuffles 10 unique questions from a 22-question pool on every new session.

Sudden-Death Challenge Mechanic: Requires an error-free streak—any incorrect answer triggers an immediate notification and resets the game back to Question 1 with a new question set.

Real-Time Score & Progress Tracking: Visual status badges dynamically update the current question number (1 to 10) and total score (+5 points per correct answer, up to 50 points).

Modern Dark UI Aesthetic: Styled using slate-dark surfaces (#0f172a and #1e293b), clean borders, and smooth hover transition states on interactive option buttons.

Dynamic DOM Rendering: Generates answer buttons on the fly with automatic alphabetical labels (A, B, C, D) using JavaScript string character codes.

End-Game Win Screen: Hides active quiz containers upon question completion to present a celebratory win card with final scores and an instant restart option.


## 🧠 Simple & Easy Functionality Explanation
Here is a plain-language breakdown of how the game operates under the hood:

The Layout & Presentation (HTML/CSS): The user interface centers a modern quiz card using CSS Flexbox. Responsive button states provide immediate visual feedback on hover, and distinct color-coded badges highlight progress (blue) and scores (green).

The Randomization Logic (JavaScript): When a game starts, the script takes a comprehensive 22-item question bank and runs a Fisher-Yates shuffle algorithm on a shallow copy, slicing the first 10 questions to ensure every game has a fresh sequence.

Question Rendering: The renderQuestion() function populates the question header, clears previous options from the container, and programmatically appends four interactive buttons for each option.

## 🛠️ Technologies Used
HTML5: Semantic element structuring, container layouts, and accessible card hierarchy.

CSS3:

Flexbox for viewport centering and header component alignment.

CSS Grid (grid-template-columns: 1fr) for responsive vertical option lists.

Custom transitions, hover states, and color-coded status badges.

Vanilla JavaScript (ES6+):

Fisher-Yates array shuffling algorithm.

Dynamic DOM manipulation (document.createElement(), innerHTML, appendChild()).

State management variables (score, currentIdx, isProcessing).

Asynchronous handling via setTimeout() for error display transitions.

*   ## 📂 Project Structure
├── index.html         # Main entry point (HTML skeleton structures)
├── style.css          # Global styling rules, themes, animations, and variables
├── script.js          # IntersectionObserver logic and active state tracking
└── README.md          # Project documentation and specifications

*   ## ✒️ Author

* **Harshit Mishra**
* *Developed as a responsive web design project using HTML, CSS, and JavaScript for the SkillC
