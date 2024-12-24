import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Independence Day Quiz</h1>
      <p>Test your knowledge about Independence Day!</p>
      <Link to="/quiz" className="btn btn-primary btn-lg">Start Quiz</Link>
    </div>
  );
};

export default StartPage;
