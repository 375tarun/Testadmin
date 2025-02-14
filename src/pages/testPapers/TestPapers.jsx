import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTestPaper } from "../../redux/slices/testPaperSlice";
import TestPaper from "../../components/testPaper/TestPaper";
import TestPaperButton from "../../components/testPaper/TestPaperButton";
import TestPaperForm from "../../components/testPaper/TestPaperForm";

const TestPapers = () => {
  const dispatch = useDispatch();
  const testPapers = useSelector((state) => state.testPapers.testPapers);
  const [showForm, setShowForm] = useState(false);

  // ✅ Ensure onSave is properly defined
  const handleSaveTest = (newTestPaper) => {
    console.log("✅ Saving Test Paper:", newTestPaper);

    if (!newTestPaper) {
      console.error("❌ Invalid test paper data!");
      return;
    }

    dispatch(addTestPaper(newTestPaper));
    setShowForm(false);
  };

  return (
    <div className="p-6 relative h-screen flex flex-col">
      <div className="absolute top-4 right-4">
        {/* ✅ Pass handleSaveTest to TestPaperButton */}
        <TestPaperButton onSave={handleSaveTest} />
      </div>

      <h1 className="text-3xl font-bold mt-10 text-gray-800">Test Papers</h1>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* ✅ Pass handleSaveTest to TestPaperForm */}
          <TestPaperForm onClose={() => setShowForm(false)} onSave={handleSaveTest} />
        </div>
      )}

      <div className="mt-10 w-full max-w-3xl flex flex-col gap-4">
        {testPapers.map((test, index) => (
          <TestPaper key={index} test={test} />
        ))}
      </div>
    </div>
  );
};

export default TestPapers;
