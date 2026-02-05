// Mathematics Question Bank
// Example question set for mathematics
const questionBank = [
  {
    id: 1,
    category: "Basic Arithmetic",
    difficulty: "easy",
    question: "What is 15 + 27?",
    options: [
      "42",
      "40",
      "45",
      "38"
    ],
    correct: 0,
    explanation: "15 + 27 = 42. This is basic addition."
  },
  {
    id: 2,
    category: "Basic Arithmetic",
    difficulty: "easy",
    question: "What is 8 × 7?",
    options: [
      "54",
      "56",
      "58",
      "52"
    ],
    correct: 1,
    explanation: "8 × 7 = 56. This is the multiplication table for 8."
  },
  {
    id: 3,
    category: "Geometry",
    difficulty: "medium",
    question: "What is the area of a circle with radius 5 units? (Use π ≈ 3.14)",
    options: [
      "78.5 square units",
      "31.4 square units",
      "15.7 square units",
      "25 square units"
    ],
    correct: 0,
    explanation: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 square units."
  },
  {
    id: 4,
    category: "Algebra",
    difficulty: "medium",
    question: "Solve for x: 2x + 5 = 17",
    options: [
      "x = 6",
      "x = 11",
      "x = 7",
      "x = 8"
    ],
    correct: 0,
    explanation: "2x + 5 = 17 → 2x = 12 → x = 6."
  },
  {
    id: 5,
    category: "Fractions",
    difficulty: "hard",
    question: "What is 3/4 + 1/6 in simplest terms?",
    options: [
      "11/12",
      "9/10",
      "5/6",
      "13/24"
    ],
    correct: 0,
    explanation: "3/4 + 1/6 = 9/12 + 2/12 = 11/12. This is already in simplest terms."
  },
  {
    id: 6,
    category: "Calculus",
    difficulty: "hard",
    question: "What is the derivative of x²?",
    options: [
      "x",
      "2x",
      "x²",
      "2"
    ],
    correct: 1,
    explanation: "The derivative of x² is 2x, following the power rule: d/dx(x^n) = nx^(n-1)."
  }
];

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionBank;
}