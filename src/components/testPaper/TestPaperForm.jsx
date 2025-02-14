import React, { useState } from "react";

const TestPaperForm = ({ onClose, onSave }) => {
  // Form state variables
  const [testName, setTestName] = useState("");
  const [testType, setTestType] = useState("Live Test");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [topic, setTopic] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [negativeMarking, setNegativeMarking] = useState(false);

  // Available topics
  const topics = ["Time and Distance", "Work", "Probability", "Algebra", "Geometry"];

  // Add selected topic to the list
  const addTopic = () => {
    if (topic && !selectedTopics.includes(topic)) {
      setSelectedTopics([...selectedTopics, topic]);
      setTopic("");
    }
  };

  // Remove a topic from the selected list
  const removeTopic = (topicToRemove) => {
    setSelectedTopics(selectedTopics.filter((t) => t !== topicToRemove));
  };

  // Validate form fields before saving
  const handleSave = () => {
    if (!testName.trim() || !totalQuestions || !duration || !startDate || !endDate) {
      alert("⚠️ Please fill in all required fields!");
      return;
    }

    const testData = {
      testName: testName.trim(),
      testType,
      topics: selectedTopics,
      totalQuestions: Number(totalQuestions),
      duration: Number(duration),
      startDate,
      endDate,
      negativeMarking,
    };

    console.log("✅ Saving Test Data:", testData);

    if (typeof onSave === "function") {
      onSave(testData);
    } else {
      console.error("❌ onSave function is missing!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {/* Modal Container */}
      <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg flex flex-col gap-6 relative">
        
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl transition-colors" onClick={onClose}>
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800">Create New Test</h2>

        {/* Form Inputs */}
        <div className="flex flex-col gap-6">
          
          {/* Test Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Test Name</label>
            <input
              type="text"
              placeholder="Enter test name"
              className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
            />
          </div>

          {/* Test Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Test Type</label>
            <select
              className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
            >
              <option>Live Test</option>
              <option>Mock Test</option>
              <option>Practice Test</option>
            </select>
          </div>

          {/* Topics Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Add Topics</label>
            <div className="flex gap-2">
              <select
                className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Select a topic</option>
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <button
                className="bg-blue-500 h-10 w-24 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={addTopic}
              >
                Add
              </button>
            </div>
            {/* Display Selected Topics */}
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedTopics.map((t, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1">
                  {t} 
                  <button onClick={() => removeTopic(t)} className="text-red-500 hover:text-red-700">✖</button>
                </span>
              ))}
            </div>
          </div>

          {/* Total Questions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Questions</label>
            <input
              type="number"
              placeholder="Enter total questions"
              className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
            <input
              type="number"
              placeholder="Enter duration"
              className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          {/* Start & End Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="datetime-local"
                className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="datetime-local"
                className="w-full h-10 px-2 border border-gray-300 rounded focus:ring-blue-500"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {/* Negative Marking Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={negativeMarking}
              onChange={() => setNegativeMarking(!negativeMarking)}
            />
            <label className="text-sm font-medium text-gray-700">Enable Negative Marking</label>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={handleSave}
          >
            Save Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPaperForm;
