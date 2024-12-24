import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';  // Import CSS file for animations

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
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question
  const [showNextButton, setShowNextButton] = useState(false); // Show the "Next" button after selecting an answer

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    setShowNextButton(true); // Show the "Next" button after answering
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1); // Move to the next question
      setShowNextButton(false); // Hide the "Next" button
    }
  };

  const handleSubmit = () => {
    const correctAnswers = questions.filter((question, index) => answers[index] === question.answer).length;
    navigate('/result', { state: { correctAnswers, total: questions.length } });
  };

  return (
    <div className="container mt-5">
      <h2>Independence Day Quiz</h2>
      
      {/* Question with fade-in/out effect */}
      <div className={`question-container ${showNextButton ? 'fade-out' : 'fade-in'}`}>
        <p>{questions[currentQuestion].question}</p>
        <div className="btn-group-vertical">
          {questions[currentQuestion].options.map(option => (
            <button
              key={option}
              className={`btn btn-outline-primary ${answers[currentQuestion] === option ? 'active' : ''}`}
              onClick={() => handleChange(currentQuestion, option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {/* Show the next button only after answering */}
      {showNextButton && currentQuestion < questions.length - 1 && (
        <button className="btn btn-primary mt-3" onClick={handleNext}>Next Question</button>
      )}
      
      {/* Submit the quiz when all questions are answered */}
      {currentQuestion === questions.length - 1 && (
        <button className="btn btn-success mt-3" onClick={handleSubmit}>Submit Quiz</button>
      )}
    </div>
  );
};

export default QuizPage;
