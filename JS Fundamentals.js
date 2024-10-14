/**
 * Main function to process learner data
 * @param {Object} courseInfo - Information about the course
 * @param {Object} assignmentGroup - Information about the assignment group
 * @param {Array} learnerSubmissions - Array of learner submissions
 * @returns {Array} Processed learner data
 */
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  try {
      validateInputData(courseInfo, assignmentGroup, learnerSubmissions);
      const assignmentMap = createAssignmentMap(assignmentGroup.assignments);
      return processLearnerSubmissions(learnerSubmissions, assignmentMap, assignmentGroup.group_weight);
  } catch (error) {
      console.error("Error processing learner data:", error.message);
      return [];
  }
}

/**
* Helper function to validate input data
* @param {Object} courseInfo - Information about the course
* @param {Object} assignmentGroup - Information about the assignment group
* @param {Array} learnerSubmissions - Array of learner submissions
*/
function validateInputData(courseInfo, assignmentGroup, learnerSubmissions) {
  if (typeof courseInfo !== 'object' || typeof assignmentGroup !== 'object' || !Array.isArray(learnerSubmissions)) {
      throw new Error("Invalid input data types");
  }
  if (courseInfo.id !== assignmentGroup.course_id) {
      throw new Error("AssignmentGroup does not belong to the specified course");
  }
}

/**
* Helper function to create a map of assignments
* @param {Array} assignments - Array of assignments
* @returns {Map} Map of assignments with assignment ID as key
*/
function createAssignmentMap(assignments) {
  return new Map(assignments.map(assignment => [assignment.id, assignment]));
}

/**
* Helper function to process learner submissions
* @param {Array} submissions - Array of learner submissions
* @param {Map} assignmentMap - Map of assignments
* @param {number} groupWeight - Weight of the assignment group
* @returns {Array} Processed learner data
*/
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

      let score = submission.submission.score || 0;
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

// Example usage
const courseInfo = { id: 451, name: "Intro to JavaScript" };
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
      { id: 1, name: "Declare Variables", due_at: "2023-01-25", points_possible: 50 },
      { id: 2, name: "Write Functions", due_at: "2023-02-27", points_possible: 150 },
      { id: 3, name: "Create Objects", due_at: "2023-03-26", points_possible: 100 }
  ]
};
const learnerSubmissions = [
  { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
  { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 125 } },
  { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-03-27", score: 80 } },
  { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 50 } },
  { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
];

const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log("Processed Learner Data:");
result.forEach(learner => {
  console.log(`Learner ID: ${learner.id}`);
  console.log(`Average Score: ${(learner.avg * 100).toFixed(2)}%`);
  for (const key in learner) {
      if (key !== 'id' && key !== 'avg') {
          console.log(`Assignment ${key} Score: ${(learner[key] * 100).toFixed(2)}%`);
      }
  }
  console.log("---");
});