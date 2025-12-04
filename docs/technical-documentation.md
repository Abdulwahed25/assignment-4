# Technical Documentation – Assignment 4: Personal Web Application

## Overview
This document provides a detailed technical explanation of the personal portfolio web application developed for Assignment 4. It covers project structure, features, front-end implementation, AI-assisted development, challenges, and solutions.

## Project Structure
assignment-4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
└── .gitignore

### Key Points:
- **index.html** – Main HTML file with semantic structure and sections: About Me, Projects, Contact.
- **css/styles.css** – Contains global styles, responsive design, dark mode variables, and card/button styling.
- **js/script.js** – Contains all front-end logic: DOM manipulation, project filtering/sorting, session timer, greetings, and GitHub API integration.
- **assets/images/** – Stores all project and profile images.
- **docs/** – Contains AI usage report and this technical documentation.
- **presentation/** – Contains slides and demo video for assignment presentation.

## Features Implemented
1. **Responsive Layout** – Designed using CSS Flexbox and Grid to adapt to multiple screen sizes.
2. **Dark Mode Toggle** – System-wide dark mode using CSS variables and JavaScript toggle. Colors optimized for readability and accessibility.
3. **Project Hub**
   - Dynamic project filtering by category.
   - Sorting by title (A-Z) and date (newest/oldest).
   - Projects are generated dynamically from a `projectsData` array in JavaScript.
4. **Session Personalization**
   - Time-based greeting: "Good Morning", "Good Afternoon", "Good Evening".
   - Session timer tracking user time on page.
   - Persistent user name and preferences stored in `localStorage`.
5. **GitHub API Integration**
   - Fetches live data from GitHub repositories.
   - Displays repository name, stars, and link dynamically.
   - Includes graceful error handling if API fails.
6. **Contact Form Validation**
   - Validates inputs using JavaScript.
   - Displays error/success feedback without breaking layout.
   - ARIA-compliant alerts for accessibility.

## Front-End Architecture
- **State Management**: Central `state` object tracks theme, active filter, and user session.
- **Dynamic DOM Rendering**: Projects, greetings, and messages are generated dynamically using JS functions like `renderProjects()`.
- **LocalStorage Usage**: Saves dark mode preference, username, and session timer data.
- **Event Handling**: Click events for toggles, filtering buttons, and form submission are handled with JS listeners.

## AI Usage
- **ChatGPT**: Assisted with code logic for project filtering, session timer, dark mode implementation, and debugging.
- **GitHub Copilot**: Suggested JavaScript code snippets, input validation, and DOM manipulation patterns.
- AI outputs were adapted manually to fit the project requirements and ensure accessibility compliance.

## Challenges & Solutions
- **Dark Mode Contrast Issues**
  - Problem: Some text and borders were difficult to read.
  - Solution: Adjusted CSS variables for better contrast and readability.
- **Dynamic Form Feedback**
  - Problem: Error messages shifted the layout unexpectedly.
  - Solution: Created a `showFormFeedback()` function to dynamically update styles without breaking layout.
- **GitHub API Handling**
  - Problem: API call failures caused empty sections.
  - Solution: Implemented try/catch blocks and fallback messages for reliability.

## Deployment
- The project is fully front-end and can be deployed on GitHub Pages, Netlify, or Vercel.
- Tested across multiple browsers (Chrome, Edge, Firefox) and devices (desktop, tablet, mobile) for responsiveness and compatibility.

## Conclusion
This portfolio demonstrates mastery of front-end development concepts including HTML, CSS, JavaScript, responsive design, dynamic content generation, and API integration. AI tools were used responsibly to accelerate development while ensuring understanding and customization of the code.