import React, { useState } from "react";
import TestPaperForm from "./TestPaperForm";

const TestPaperButton = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = (newTestPaper) => {
    onSave(newTestPaper); // Save test paper to Redux store
    setIsOpen(false); // Close the form after saving
  };

  return (
    <>
      <button
        className="bg-blue-500 h-15 w-50 text-white px-6 py-3 text-3xl font-semibold rounded-lg hover:bg-blue-900 transition"
        onClick={() => setIsOpen(true)}
      >
        + Add Test
      </button>

      {isOpen && <TestPaperForm onClose={() => setIsOpen(false)} onSave={handleSave} />}
    </>
  );
};

export default TestPaperButton;
