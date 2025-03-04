import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTestPaper } from '../../redux/slices/testPaperSlice';

const TestPaperButton = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.testPapers);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    testName: '',
    testType: '',
    testTopic: [],
    testDifficulty: '',
    testDuration: '',
    startDuration: '',
    endDuration: '',
    totalQuestion: '',
    totalMarks: '',
    negativeMarking: false
  });

  const topics = [
    'work',
    'Physics',
    'Chemistry',
    'Maths',
    'probability',
    'Time and Distance'
  ];

  const handleSubmit = () => {
    dispatch(createTestPaper(formData));
    setIsOpen(false);
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTopic = (topic) => {
    if (!formData.testTopic.includes(topic)) {
      handleChange('testTopic', [...formData.testTopic, topic]);
    }
  };

  const removeTopic = (topicToRemove) => {
    handleChange('testTopic', 
      formData.testTopic.filter(topic => topic !== topicToRemove)
    );
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition-all"
      >
        Add Test Paper
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/10">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Test Paper</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Test Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  value={formData.testName}
                  onChange={(e) => handleChange('testName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Test Type</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  value={formData.testType}
                  onChange={(e) => handleChange('testType', e.target.value)}
                >
                  <option value="">Select test type</option>
                  <option value="Live">Live Test</option>
                  <option value="Mock">Mock Test</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Test Topics</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  onChange={(e) => addTopic(e.target.value)}
                >
                  <option value="">Select topics</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.testTopic.map((topic) => (
                    <span key={topic} className="bg-blue-200 text-blue-900 px-2 py-1 rounded-lg flex items-center">
                      {topic}
                      <button className="ml-2 text-red-500" onClick={() => removeTopic(topic)}>×</button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Test Difficulty</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  value={formData.testDifficulty}
                  onChange={(e) => handleChange('testDifficulty', e.target.value)}
                >
                  <option value="">Select difficulty</option>
                  <option value="level1">Level 1</option>
                  <option value="level2">Level 2</option>
                  <option value="level3">Level 3</option>
                  <option value="level4">Level 4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (min)</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  value={formData.testDuration}
                  onChange={(e) => handleChange('testDuration', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Test Time</label>
                <div className="flex gap-2">
                  <input
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                    value={formData.startDuration}
                    onChange={(e) => handleChange('startDuration', e.target.value)}
                  />
                  <input
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                    value={formData.endDuration}
                    onChange={(e) => handleChange('endDuration', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Total Questions</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  value={formData.totalQuestion}
                  onChange={(e) => handleChange('totalQuestion', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Total Marks</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                  value={formData.totalMarks}
                  onChange={(e) => handleChange('totalMarks', e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Negative Marking</label>
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-blue-600"
                  checked={formData.negativeMarking}
                  onChange={(e) => handleChange('negativeMarking', e.target.checked)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">Error: {error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default TestPaperButton;
