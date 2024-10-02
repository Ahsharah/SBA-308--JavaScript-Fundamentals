/**
 * Part 1 - Four Types of Data
 * 1. CourseInfo Object
 * 2. AssignmentGroup Object
 * 3. AssignmentInfo Object
 * 4. LearnerSubmission Object
 */

/**
 * Part 2 - Analyze and Transform Data
 * Output = array of objects containing info:
 * {
 *   // the ID of the learner for which this data has been collected
 *   "id": number,
 *   // the learner's total, weighted average, in which assignments
 *   // with more points_possible should be counted for more
 *   // e.g. a learner with 50/100 on one assignment and 190/200 on another
 *   // would have a weighted average score of 240/300 = 80%.
 *   "avg": number,
 *   // each assignment should have a key with its ID,
 *   // and the value associated with it should be the percentage that
 *   // the learner scored on the assignment (submission.score / points_possible)
 *   <assignment_id>: number,
 *   // if an assignment is not yet due, it should not be included in either
 *   // the average or the keyed dictionary of scores
 * }
 */

/**
 * Part 3: Create function - getLearnerData()
 * Accepts Values and Parameters in the order listed:
 * - CourseInfo, AssignmentGroup, [LearnerSubmission]
 */

// Main Function to process learner data
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    // Validate input data
    try {
        validateInputData(courseInfo, assignmentGroup, learnerSubmissions);
    } catch (error) {
        console.error("Error validating input data:", error.message);
        return [];
    }

    // TODO: Implement data processing logic here

    // Placeholder return statement
    return [];
}

// Helper function to validate input data
function validateInputData(courseInfo, assignmentGroup, learnerSubmissions) {
    // TODO: Implement validation logic
    // For now, just checking if all parameters are provided
    if (!courseInfo || !assignmentGroup || !learnerSubmissions) {
        throw new Error("Missing required input data");
    }

// Process assignments and create a map for easy access
const assignmentMap = creatAssignmentMap(assignmentGroup.assignments);

// Process learner submissions
const learnerData = processLearnerSubmissions(learnerSubmissions, assignmentMap, assignmentGroup.group_weight);

return learnerData;

}

// Helper funtion to validate input data
function validateInputData(courseInfro, assignmentGroup, learnerSubmissions) {
    if (typeof courseInfo !== 'object' || typeof assignmentGroup !== 'object' || !Array.isArray(learnerSubmissions)) {
    throw new Error("Invalid input data types");
    }

    if (courseInfo.id !== assignmentGroup.course_id){
        throw new Error("AssignmentGroup does not belong to the specified course");
    }
}

// Helper function to process learner submissions
function processLearnerSubmissions(submissions, assignmentMap, groupWeight) {
  const learnerData = new Map();

  for (const submission of submissions) {
    const learnerId = submission.learner_id;
    const assignmentId = submission.assignment_id;
    const assignment = assignmentMap.get(assignmentId);

    if (!assignment) {
      console.warn(`Assignment ${assignmentId} not found. Skipping submission.`);
      continue;
    }

    if (!learnerData.has(learnerId)) {
      learnerData.set(learnerId, {
        id: learnerId,
        totalWeightedScore: 0,
        totalPointsPossible: 0,
      });
    }

    const learner = learnerData.get(learnerId);
    const dueDate = new Date(assignment.due_at);
    const submittedDate = new Date(submission.submission.submitted_at);

    // Skip if assignment is not yet due
    if (dueDate > new Date()) {
      continue;
    }

    let score = submission.submission.score;
    if (submittedDate > dueDate) {
      // Late submission penalty
      score -= assignment.points_possible * 0.1;
    }

    const percentage = score / assignment.points_possible;
    learner[assignmentId] = percentage;

    learner.totalWeightedScore += score;
    learner.totalPointsPossible += assignment.points_possible;
  }

  // Calculate weighted averages and format output
  return Array.from(learnerData.values()).map(learner => {
    const avg = (learner.totalWeightedScore / learner.totalPointsPossible) * groupWeight;
    const result = { id: learner.id, avg };
    
    for (const key in learner) {
      if (typeof learner[key] === 'number' && key !== 'id' && key !== 'totalWeightedScore' && key !== 'totalPointsPossible') {
        result[key] = learner[key];
      }
    }

    return result;
  });
}

const courseInfo = { id: 451, name:"Intro to JavaScript"};
const assignmentGroup = {
    id:12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        { id: 1, name: "Declare Variables", due_at: "2023-01-25", points_possible: 50 },
        { id: 2, name: "Write Functions", due_at: "2023-02-27", points_possible: 150 },
        { id: 3, name: "Create Objects", due_at: "2023-03-26", points_possible: 100 }

        }

}
        }
    ]
}


// Example usage (commented out for now)
/*
const courseInfo = { id: 451, name: "Introduction to JavaScript" };
const assignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        { id: 1, name: "Declare Variables", due_at: "2023-01-25", points_possible: 50 },
        { id: 2, name: "Write Functions", due_at: "2023-02-27", points_possible: 150 },
        { id: 3, name: "Create Objects", due_at: "2023-03-27", points_possible: 100 }
    ]
};
const learnerSubmissions = [
    { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
    { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
    { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-03-27", score: 95 } },
    { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 50 } },
    { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
];

const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log(result);
*/