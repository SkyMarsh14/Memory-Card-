# Memory Card Project

This project is part of The Odin Project's React course. It aims to reinforce the use of **React hooks** for state management and the integration of external APIs to fetch and display data dynamically.

---

## 🎮 **How the Game Works**

The Memory Card game is a simple yet fun project to test your memory! Players click on cards to score points, but clicking the same card twice resets the score. The cards shuffle each time you click, keeping you on your toes.

---

## 🚀 **Assignment Goals**

### **1. Create the React Project**

- Initialize a new React application.
- Plan the application's structure, features, and components.

### **2. Key Features**

- **Scoreboard**:
  - Track your current score.
  - Display the highest score (Best Score).
- **Randomized Cards**:
  - Shuffle the cards on every click.
  - Shuffle the cards when the component mounts.

### **3. Fetch Data**

- I have used the following API to fetch Pokemon data. When webpage loads, or game resets, it fetches 10 random pokemon image from pokemon index of 1-30, and displays info.
- API used:
  - [Pokemon API](https://pokeapi.co/)

### **4. Live version**

- Live version is available at https://pokemon-memory-card-top.netlify.app.
- This website is uploaded using **Netlify**.

## 🛠️ **How to Run the Project Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memory-card.git
   ```
2. Navigate to the project folder:
   ```
   cd memory-card
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and visit https://localhost:5173.
