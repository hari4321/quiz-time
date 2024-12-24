import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { correctAnswers, total } = location.state || { correctAnswers: 0, total: 0 };

  return (
    <div className="container text-center mt-5">
      <h2>Quiz Results</h2>
      <p>You answered {correctAnswers} out of {total} questions correctly!</p>
      <Link to="/" className="btn btn-primary">Go Back to Start</Link>
    </div>
  );
};

export default ResultPage;
