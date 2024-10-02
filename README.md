Learner Data Processor

Project Overview

    This JavaScript application processes course and learner data to calculate weighted average scores for students based on their assignment submissions. It handles late submissions, assignment due dates, and provides a detailed breakdown of scores per assignment.
    
    The application processes data and returns an array of objects containing each learner's ID, weighted average score, and individual assignment scores.

Key Features

    - Processes course information, assignment groups, and learner submissions
    - Calculates weighted average scores for each learner
    - Handles late submission penalties
    - Skips assignments that are not yet due
    - Provides detailed output for each learner's performance
    - Error handling for various edge cases (e.g., division by zero, invalid data types)
    - Data validation to ensure input integrity

Project Structure

The main components of the project include:

    getLearnerData(): The primary function that orchestrates the data processing
    validateInputData(): Ensures the input data is valid
    processLearnerSubmissions(): Processes the learner submissions
    calculateWeightedAverages(): Calculates the weighted average for each learner

Error Handling

    The script includes input validation and error handling for invalid data.
    Warnings are logged for assignments with 0 points possible or missing assignments.
    Errors are thrown with descriptive messages to aid in debugging.

Installation

    Clone the repository
    Ensure you have Node.js installed on your system
    Navigate to the project directory

Usage

    Run the script using Node.js:
    node script.js

Customization

    You can modify the getLearnerData function parameters and the example usage section to work with your specific data structures and requirements.   
     
Development

    This project was developed using beginner JavaScript. To modify the project:

    Open the script in your preferred code editor
    Make your changes
    Test the script by running it with Node.js

Contributing

    Feel free to fork this repository and submit pull requests for any enhancements.

License

    This project is open source and available under the Per Scholas License.
