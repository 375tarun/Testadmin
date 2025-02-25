import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "../../redux/slices/questionSlice";

const QuestionForm = ({ onClose, testId }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.questions);

  const [questionType, setQuestionType] = useState("single");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectAnswer] = useState([]);
  const [marks, setMarks] = useState("");
  const [negativeMarks, setNegativeMark] = useState("");

  const { selectedTestPaper } = useSelector((state) => state.testPapers);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCorrectAnswerChange = (value) => {
    if (questionType === "multiple") {
      setCorrectAnswer((prev) =>
        prev.includes(value) ? prev.filter((ans) => ans !== value) : [...prev, value]
      );
    } else {
      setCorrectAnswer([value]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = {
      testPaperId: selectedTestPaper?._id,
      questionType,
      questionText,
      options: questionType !== "typed" ? options : [],
      correctOption,
      marks,
      negativeMarks,
    };

    try {
      await dispatch(createQuestion(questionData)).unwrap();
      alert("Question Created Successfully! ✅");
      onClose();
    } catch (error) {
      alert("Error creating question: ❌ " + error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Add Question</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block font-medium">
            Question Type:
            <select
              className="w-full mt-1 p-2 border rounded-lg"
              value={questionType}
              onChange={(e) => {
                setQuestionType(e.target.value);
                setCorrectAnswer([]);
              }}
            >
              <option value="single">Single Correct</option>
              <option value="multiple">Multiple Correct</option>
              <option value="typed">Typed</option>
            </select>
          </label>

          <label className="block font-medium">
            Question Text:
            <textarea
              className="w-full mt-1 p-2 border rounded-lg"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
            />
          </label>

          {questionType !== "typed" && (
            <div>
              <label className="block font-medium">Options:</label>
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    required
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <label className="block font-medium">Correct Answer:</label>
            {questionType === "typed" ? (
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                value={correctOption}
                onChange={(e) => setCorrectAnswer([e.target.value])}
                required
              />
            ) : (
              <div className="mt-2">
                {options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {questionType === "multiple" ? (
                      <input
                        type="checkbox"
                        checked={correctOption.includes(option)}
                        onChange={() => handleCorrectAnswerChange(option)}
                      />
                    ) : (
                      <input
                        type="radio"
                        name="correctOption"
                        checked={correctOption[0] === option}
                        onChange={() => handleCorrectAnswerChange(option)}
                      />
                    )}
                    <span>{option || `Option ${index + 1}`}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="block font-medium">
            Marks:
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-lg"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />
          </label>

          <label className="block font-medium">
            Negative Marks:
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded-lg"
              value={negativeMarks}
              onChange={(e) => setNegativeMark(e.target.value)}
              required
            />
          </label>

          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
