# Personal Portfolio Website – Assignment 4  
This project is a responsive personal portfolio website that includes dark mode support, project filtering and sorting, GitHub API integration, a personalized greeting system, a session timer, and a validated contact form.  
The goal of this assignment was to build an accessible, user-friendly, and organized portfolio using HTML, CSS, and JavaScript while following good development practices.

---

##  Features Implemented

### 1. **Responsive Design**
- Fully responsive layout for desktop and mobile.  
- Flexbox and CSS variables are used for maintainable styling.  

### 2. **Dark Mode / Light Mode Toggle**
- Implemented using CSS variables and JavaScript.
- Fixed contrast issues so all text remains readable.
- Mode preference saved in `localStorage`.

### 3. **Dynamic Project Display**
- Projects are loaded from a JS array.
- Users can:
  - **Filter** projects by category.
  - **Sort** projects alphabetically (A–Z or Z–A).
- Fully dynamic DOM generation.

### 4. **GitHub API Integration**
- Fetches the latest repository from the user’s GitHub account.
- Shows the repo name, description, and link.
- Updates automatically whenever GitHub changes.

### 5. **Personalized Greeting System**
- Website displays a different greeting depending on the time of day:
  - Good morning  
  - Good afternoon  
  - Good evening  
- Uses the client’s local time.

### 6. **Session Timer**
- Tracks how long the user has been on the website.
- Displays time in minutes and seconds.
- Resets only if the browser tab is closed.

### 7. **Contact Form + Form Validation**
- Validates:
  - Name (not empty)
  - Email (correct format)
  - Message (not empty)
- Displays error messages clearly using accessible ARIA alerts.
- Adds error styling for invalid inputs.

---

##  Technologies Used

### **Frontend**
- HTML5
- CSS3 (Variables, Dark/Light themes, Flexbox)
- JavaScript (DOM manipulation, fetch API, event listeners)

### **APIs**
- **GitHub REST API** for dynamic repository display.

### **Version Control**
- Git + GitHub for project hosting.

---

##  Folder Structure
/project-root
│── index.html
│── styles.css
│── script.js
│── README.md
│── technical-documentation.md (separate file)
│── images/ (all project images)


## Through this assignment, the following concepts were practiced:

- DOM manipulation & event handling
- Asynchronous JavaScript (fetch API)
- Using real APIs (GitHub)
- Managing themes using CSS variables
- Improving accessibility (ARIA roles + contrast)
- Organizing code into reusable functions
- Writing clean documentation