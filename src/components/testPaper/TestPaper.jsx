import React from "react";

const TestPaper = ({ test, onEdit, onAddQuestions }) => {
  return (
    <div className="p-4 w-full bg-amber-100 rounded-lg shadow-md flex flex-col gap-3">
      {/* Test Name */}
      <h2 className="text-xl font-bold text-gray-800">{test.testName}</h2>
      
      {/* Test Details */}
      <p className="text-gray-600">
        <strong>Type:</strong> {test.testType}
      </p>
      <p className="text-gray-600">
        <strong>Topics:</strong> {test.topics?.length ? test.topics.join(", ") : "No topics selected"}
      </p>
      <p className="text-gray-600">
        <strong>Duration:</strong> {test.duration} min
      </p>
      <p className="text-gray-600">
        <strong>Total Questions:</strong> {test.totalQuestions}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => onEdit && onEdit(test)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => onAddQuestions && onAddQuestions(test)}
        >
          Add Questions
        </button>
      </div>
    </div>
  );
};

export default TestPaper;
