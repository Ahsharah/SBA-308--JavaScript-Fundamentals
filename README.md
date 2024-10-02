Learner Data Generator:
    
    This JavaScript application processes course and learner data to calculate weighted average scores for students based on their assignment submissions. It handles late submissions, assignment due dates, and provides a detailed breakdown of scores per assignment.

Project Overview:

    - Processes course information, assignment groups, and learner submissions
    - Calculates weighted average scores for each learner
    - Handles late submission penalties
    - Skips assignments that are not yet due
    - Provides detailed output for each learner's performance

    This application processes data and returns an array of objects containting each learner's ID, weighted average scpre, and individual assignment scores.

Key Features:
    
    Error handling for various edge cases (example - division by zero, invalid data types)
    Processing of learner submissions, incling hadnling late submission
    Data validation to ensure input integrity

Project Structure:

    Main componetnts of project includes:

    1. getLernerData() : The primary function that orchestrates the data processing
    2. validateInputData() : Ensures the input data is valid
    3. processLearnerSubmissions() : Processes the learner submissions
    4. calculateWeightedAverages() : Calculates the weighted average for each learner


Error Handling 

    The script includes input validation and error handling for invalid data.
    Warnings are logged for assignments with 0 points possible or missing assignments.
        
    Errors are thrown with descriptive messages to aid in debugging.

Developement 
    This project was developed using beginner JavaScript. To run or modify the project:

        1. Clone Repository
        2. Ensure you have Node.js installed
        3. Run the script using Node.js: node script.js

Customization

    You can modify the getLearnerData function paramters and the example usage section to work
    with your specific data structrures and requirements.

Contributing

    Feel free to fork this repoisity and submit pull requests for any enhancements.

License

    This project is open souece and available under the PerScholas License.