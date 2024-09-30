/* Part 1 - Four Types of Data - Start here.
    // 1. CourseInfo Object
    // 2. AssignmentGroup Object
    // 3. AssignmentInfo Object
    // 4. LearnerSubmission Object
*/

// Part 2 -  Analyze and Transform Data - Output = array of objects containing info -
    /* the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}*/

/* Part 3: Create function - getLearnerData()
    Accepts Values and Parameters in the order listed:
    - CourseInfo, AssignementGroup, [LearnSubmission]
*/


// Data Structure - Sample Data 

const courseInfo = {
    id: 0,
    name:"",
    course_id: 0,
    group_weight: 0,
    assignements: []

};

const learnerSubmissions = []

// Main Function
function getLearnerData (courseInfo, assignmentGroup, learnerSubmissions) {
    // Validate input data
    if (!validateInputData (courseInfo, assignmentGroup, learnerSubmissions)) {
        throw new Error ("Invalid input data");

    }
 //Process learner submissions
    const learnerData = processLearnerSubmissions (assignmentGroup, learnerSubmissions);
    



















}