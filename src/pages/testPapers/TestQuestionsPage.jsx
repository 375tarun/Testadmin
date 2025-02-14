// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import TestQuestions from "../../components/testPaper/TestQuestions";

// const TestQuestionsPage = () => {
//   const navigate = useNavigate();
//   const test = useSelector((state) => state.tests?.selectedTest);
// //   const test = useSelector((state) => state.tests?.selectedTest);
//   console.log("Redux State - selectedTest:", test);
  
//   useEffect(() => {
//     if (!test) {
//       console.log("Redirecting - No test selected");
//       navigate("/tests"); // Redirect if Redux is empty
//     }
//   }, [test, navigate]);

//   if (!test) return <p>Redirecting...</p>; // Prevents crash

//   return (
//     <div className="p-4 w-full">
//       <TestQuestions test={test} />
//     </div>
//   );
// };

// export default TestQuestionsPage;
