Learner Data Generator:
    
    This project is a JavaScript application that processes and analyzes educational data, including course informationm assignment groups, and learner submissions. It calculates weighted averages and provides a summary of learner performance.

Project Overview:
   
    The main function getLearnerData() takes three parameters:
    1. CourseInfo object
    2. AssignmentGroup object
    3. Array of LearnerSubmission objects

    This application processes data and returns an array of objects containting each learner's ID, weighted average scpre, and individual assignment scores.

Key Features:
    
    Error handling for various edge cases (example - division by zero, invalid data types)
    Processing of learner submissions, incling hadnling late submission
    Data validation to ensure input integrity

Project Structure:

    Main componetnts of project include:

    1. getLernerData() : The primary function that orchestrates the data processing
    2. validateInputData() : Ensures the input data is valid
    3. processLearnerSubmissions() : Processes the learner submissions
    4. calculateWeightedAverages() : Calculates the weighted average for each learner