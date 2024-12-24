import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "When did India gain independence?",
      options: ["1947", "1950", "1965", "1971"],
      answer: "1947",
    },
    {
      question: "Who was the first Prime Minister of India?",
      options: ["Jawaharlal Nehru", "Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
      answer: "Jawaharlal Nehru",
    },
    {
      question: "What is the national flag of India called?",
      options: ["Tricolour", "Flag of India", "Ashoka Flag", "Bharati Flag"],
      answer: "Tricolour",
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = questions.filter((question, index) => answers[index] === question.answer).length;
    navigate('/result', { correctAnswers, total: questions.length });
  };

  return (
    <div className="container mt-5">
      <h2>Independence Day Quiz</h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p>{question.question}</p>
          <div className="btn-group-vertical">
            {question.options.map(option => (
              <button
                key={option}
                className={`btn btn-outline-primary ${answers[index] === option ? 'active' : ''}`}
                onClick={() => handleChange(index, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button className="btn btn-success mt-3" onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;
