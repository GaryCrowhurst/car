# Questions Folder

This folder contains question files for the Pit Stop Challenge racing game.

## Current Implementation

Currently, the game loads `questions.js` which contains EVOLVE 155 questions. The game supports filtering by category and difficulty through dropdown menus.

## File Structure

Each question file should be a JavaScript file that exports a `questionBank` array containing question objects.

## Question Object Structure

Each question must have the following properties:

```javascript
{
  id: number,           // Unique identifier within the file
  category: string,     // Category name (e.g., "Mathematics", "Science")
  difficulty: string,   // "easy", "medium", or "hard"
  question: string,     // The question text
  options: array,       // Array of exactly 4 string options
  correct: number,      // Index (0-3) of the correct option
  explanation: string   // Explanation of the correct answer
}
```

## Creating New Question Files

1. Copy `question-template.js` to a new file (e.g., `math-questions.js`)
2. Replace the example questions with your own
3. Ensure all questions have unique IDs within the file
4. Use consistent category names for related questions
5. Balance difficulty levels across your questions

## Future: Dynamic Question Set Loading

The game could be enhanced to support loading different question files dynamically. To prepare for this:

1. Create separate question files for different subjects
2. Each file should follow the same structure as `questions.js`
3. The main game would need modification to:
   - Scan this folder for .js files
   - Add a dropdown to select question sets
   - Load the selected file dynamically
   - Update the category dropdown based on available categories

## Guidelines

- **Questions**: Should be clear, educational, and age-appropriate
- **Options**: Exactly 4 options, with one clearly correct answer
- **Explanations**: Provide helpful context and learning value
- **Difficulty**: Easy questions should be straightforward, hard questions should challenge knowledgeable players
- **Categories**: Group related questions by subject matter

## Example Categories

- Mathematics
- Science
- History
- Geography
- Literature
- Technology
- Sports
- Arts

## Testing

After creating a question file, you can test it by:
1. Temporarily replacing the content of `questions.js` with your new questions
2. Starting the game and checking that questions load correctly
3. Verifying that options display properly
4. Confirming that correct answers are marked and explanations appear

## Template Usage

Use `question-template.js` as a starting point for creating new question sets. It contains:
- Example questions for each difficulty level
- Proper structure and formatting
- Comments explaining each field
- Export statement for module compatibility