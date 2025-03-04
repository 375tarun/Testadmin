import React, { useEffect } from "react";
import AddQuestionButton from "../../components/question/AddQuestionButton.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTestPaperById } from "../../redux/slices/testPaperSlice";
import QuestionCard from "../../components/question/QuestionCard.jsx";

const TestQuestionPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select Redux state
  const { selectedTestPaper } = useSelector((state) => state.testPapers);

  if (!selectedTestPaper) {
    return (
      <div className="text-center text-gray-500 text-lg">
        No test details available.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 mt-6">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          {selectedTestPaper?.testName}
        </h2>
        <AddQuestionButton />
      </div>

      {/* Test Details Section */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-sm mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Test Details
        </h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>
            <strong>Type:</strong> {selectedTestPaper?.testType}
          </p>
          <p>
            <strong>Difficulty:</strong> {selectedTestPaper?.testDifficulty}
          </p>
          <p>
            <strong>Duration:</strong> {selectedTestPaper?.testDuration} min
          </p>
          <p>
            <strong>Total Questions:</strong> {selectedTestPaper?.totalQuestion}
          </p>
          <p>
            <strong>Negative Marking:</strong>{" "}
            {selectedTestPaper?.negativeMarking ? "Yes" : "No"}
          </p>
        </div>
      </div>

      {/* Questions liSection */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions</h3>
        <QuestionCard />
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <button
          className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all"
          onClick={() => navigate(-1)}
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default TestQuestionPage;
