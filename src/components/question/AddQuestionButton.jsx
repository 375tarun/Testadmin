import React, { useState } from "react";
import QuestionForm from "../question/QuestionForm"; // Import the form component

const AddQuestionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Add Question Button */}
      <button
        className="px-5 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all"
        onClick={() => setIsOpen(true)}
      >
        + Add Question
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add a New Question</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
            </div>

            {/* Question Form Component */}
            <QuestionForm onClose={() => setIsOpen(false)} />

            {/* Close Button */}
            <div className="text-right mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddQuestionButton;
