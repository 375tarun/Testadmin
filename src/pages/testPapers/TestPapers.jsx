import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestPapers } from '../../redux/slices/testPaperSlice';
import TestPaper from '../../components/testPaper/TestPaper';
import TestPaperButton from '../../components/testPaper/TestPaperButton';

const TestPapers = () => {
  const dispatch = useDispatch();
  const { testPapers, loading, error } = useSelector((state) => state.testPapers);

  console.log(testPapers)

  useEffect(() => {
    dispatch(getTestPapers());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full flex justify-between items-center p-4 bg-gray-100 rounded">
        <h2 className="text-2xl font-bold">Test Papers</h2>
        <TestPaperButton />
      </div>

      {loading && <p>Loading test papers...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {testPapers.length === 0 ? (
        <p className="text-center text-gray-500">No test papers available</p>
      ) :  (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testPapers.map((test) => (
            <TestPaper key={test?._id} test={test} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestPapers;
