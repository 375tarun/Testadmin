import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTestPaper, setSelectedTestPaper } from '../../redux/slices/testPaperSlice';

const TestPaper = ({ test, onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this test paper?')) {
      try {
        await dispatch(deleteTestPaper(test._id)).unwrap();
        onDelete && onDelete(test);
      } catch (error) {
        console.error('Failed to delete test paper:', error);
      }
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{test?.testName}</h3>
        <p className="text-gray-600"><strong>Type:</strong> {test?.testType}</p>
        <p className="text-gray-600"><strong>Difficulty:</strong> {test?.testDifficulty}</p>
        <p className="text-gray-600"><strong>Topics:</strong> {test?.testTopic.join(', ')}</p>
        <p className="text-gray-600"><strong>Duration:</strong> {test?.testDuration} min</p>
        <p className="text-gray-600"><strong>Total Questions:</strong> {test?.totalQuestion}</p>
        <p className="text-gray-600"><strong>Negative Marking:</strong> {test?.negativeMarking ? 'Yes' : 'No'}</p>
      </div>
      
      <div className="flex justify-between mt-4">
        <button 
          className="flex-1 px-4 py-2 bg-blue-300 text-gray-800 rounded-lg hover:bg-blue-400 transition-all"
          onClick={() => onEdit(test)}
        >
          Edit
        </button>
        <button 
          className="flex-1 px-4 py-2 bg-red-300 text-gray-800 rounded-lg hover:bg-red-400 transition-all mx-2"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button 
          className="flex-1 px-4 py-2 bg-green-300 text-gray-800 rounded-lg hover:bg-green-400 transition-all"
          onClick={() => {
            dispatch(setSelectedTestPaper(test))
            navigate(`/tests/${test._id}`)}}
        >
          Open
        </button>
      </div>
    </div>
  );
};

export default TestPaper;
