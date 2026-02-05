// Question Template for Pit Stop Challenge
// Copy this template to create new question files
// Each question file should export a questionBank array

const questionBank = [
  // Example questions for different categories and difficulties

  // EASY QUESTIONS
  {
    id: 1,
    category: "Your Category Name",
    difficulty: "easy",
    question: "What is the capital of France?",
    options: [
      "Paris",
      "London",
      "Berlin",
      "Madrid"
    ],
    correct: 0,
    explanation: "Paris is the capital and most populous city of France."
  },

  // MEDIUM QUESTIONS
  {
    id: 2,
    category: "Your Category Name",
    difficulty: "medium",
    question: "Which planet is known as the Red Planet?",
    options: [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    correct: 1,
    explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface."
  },

  // HARD QUESTIONS
  {
    id: 3,
    category: "Your Category Name",
    difficulty: "hard",
    question: "What is the chemical symbol for gold?",
    options: [
      "Go",
      "Gd",
      "Au",
      "Ag"
    ],
    correct: 2,
    explanation: "Au comes from the Latin word 'aurum' meaning gold."
  },

  // Add more questions here...
  // Make sure each question has a unique id within this file
  // Categories should be consistent within a subject area
  // Difficulty levels: "easy", "medium", "hard"
  // Options should be exactly 4 strings
  // correct should be the index (0-3) of the right answer
  // explanation should be helpful and educational

];

// Export the question bank for use in the game
// This allows the main game to load different question sets
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionBank;
}