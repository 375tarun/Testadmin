import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  deleteQuestion,
} from "../../redux/slices/questionSlice";
import { useParams } from "react-router-dom";

const QuestionCard = () => {
  const { testId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions(testId));
  }, [dispatch, testId]);

  const { questions, loading, error } = useSelector((state) => state.questions);

  const handleDelete = (questionId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (isConfirmed) {
      dispatch(deleteQuestion(questionId));
    }
  };

  if (loading) return <p className="text-gray-500">Loading questions...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-3">
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <div
            key={question._id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
          >
            <h4 className="font-medium text-lg">
              {index + 1}. {question.questionText}
            </h4>
            {question.options && question.options.length > 0 && (
              <ul className="mt-2 list-disc list-inside">
                {question.options.map((option, i) => (
                  <li key={i} className="text-gray-700">
                    {option}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-2 text-sm text-gray-500">
              <strong>Marks:</strong> {question.marks} |
              <strong> Negative Marks:</strong> {question.negativeMarks}
            </p>
            <button
              onClick={() => handleDelete(question._id)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No questions available.</p>
      )}
    </div>
  );
};

export default QuestionCard;
