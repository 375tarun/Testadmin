import React from 'react';

const TestPaper = ({ test }) => {
  return (
    <div className="border p-4 rounded shadow-lg bg-white">
      <h3 className="text-lg font-bold">{test?.testName}</h3>
      <p><strong>Type:</strong> {test?.testType}</p>
      <p><strong>Difficulty:</strong> {test?.testDifficulty}</p>
      <p><strong>Topics:</strong> {test?.testTopic.join(', ')}</p>
      <p><strong>Duration:</strong> {test?.testDuration} min</p>
      <p><strong>Total Questions:</strong> {test?.totalQuestion}</p>
      {/* <p><strong>Total Marks:</strong> {test.totalMarks}</p> */}
      <p><strong>Negative Marking:</strong> {test?.negativeMarking ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default TestPaper;
