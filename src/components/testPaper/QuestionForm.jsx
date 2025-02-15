// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addQuestion } from "../../redux/slices/questionSlice";

// const QuestionForm = ({ test, onClose }) => {
//   const dispatch = useDispatch();
//   const [questionType, setQuestionType] = useState("Single Answer");
//   const [questionText, setQuestionText] = useState("");
//   const [options, setOptions] = useState(["", "", "", ""]);
//   const [correctOptions, setCorrectOptions] = useState([]);
//   const [marks, setMarks] = useState("");
//   const [negativeMarks, setNegativeMarks] = useState(test.negativeMarking ? "" : "0");

//   const handleSave = () => {
//     if (!questionText || !marks) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     const questionData = {
//       testId: test.testName,
//       question: {
//         questionType,
//         questionText,
//         options: questionType !== "Typed" ? options : [],
//         correctOptions: questionType !== "Typed" ? correctOptions : [],
//         marks,
//         negativeMarks,
//       },
//     };

//     dispatch(addQuestion(questionData));
//     onClose(); // Close form after saving
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold">Add Question</h2>

//       <label>Question Type</label>
//       <select className="border p-2 rounded w-full" value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
//         <option>Single Answer</option>
//         <option>Multiple Answer</option>
//         <option>Typed</option>
//       </select>

//       <label>Question</label>
//       <textarea className="border p-2 rounded w-full" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />

//       {questionType !== "Typed" && (
//         <>
//           <label>Options</label>
//           {options.map((opt, index) => (
//             <input key={index} type="text" className="border p-2 rounded w-full" placeholder={`Option ${index + 1}`} value={opt}
//               onChange={(e) => {
//                 const newOptions = [...options];
//                 newOptions[index] = e.target.value;
//                 setOptions(newOptions);
//               }}
//             />
//           ))}
//           <label>Correct Option(s)</label>
//           <input type="text" className="border p-2 rounded w-full" placeholder="Enter correct option numbers (e.g. 1,2)" onChange={(e) => setCorrectOptions(e.target.value.split(","))} />
//         </>
//       )}

//       <label>Marks</label>
//       <input type="number" className="border p-2 rounded w-full" value={marks} onChange={(e) => setMarks(e.target.value)} />

//       {test.negativeMarking && (
//         <>
//           <label>Negative Marks</label>
//           <input type="number" className="border p-2 rounded w-full" value={negativeMarks} onChange={(e) => setNegativeMarks(e.target.value)} />
//         </>
//       )}

//       <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600" onClick={handleSave}>
//         Save Question
//       </button>
//     </div>
//   );
// };

// export default QuestionForm;
