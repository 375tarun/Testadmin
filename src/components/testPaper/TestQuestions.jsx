// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import QuestionForm from "./QuestionForm";
// import QuestionContainer from "./QuestionContainer";

// const TestQuestions = ({ test, onClose }) => {
//   if (!test) {
//     console.error("Test object is undefined!");
//     return <p className="text-red-500">Error: Test data not found!</p>;
//   }

//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const questions = useSelector((state) => state.questions.questions[test.testName] || []);

//   return (
//     <div className="p-4 w-full bg-gray-100 rounded-lg shadow-md flex flex-col gap-4">
//       {/* Top Section: Test Details */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">{test.testName}</h2>
//           <p className="text-gray-600"><strong>Type:</strong> {test.testType}</p>
//           <p className="text-gray-600"><strong>Duration:</strong> {test.duration} min</p>
//         </div>
//         <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={() => setIsFormOpen(true)}>
//           + Add Question
//         </button>
//       </div>

//       {/* Bottom Section: Questions List */}
//       <div className="flex flex-col gap-2">
//         {questions.length > 0 ? (
//           questions.map((q, index) => <QuestionContainer key={index} question={q} />)
//         ) : (
//           <p className="text-gray-500">No questions added yet.</p>
//         )}
//       </div>

//       {/* Open Question Form */}
//       {isFormOpen && <QuestionForm test={test} onClose={() => setIsFormOpen(false)} />}
//     </div>
//   );
// };

// export default TestQuestions;
