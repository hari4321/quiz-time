import "./Start.css";
import { useNavigate } from "react-router-dom";
import StartButton from "../../components/buttons/start/StartButton";

const StartPage = () => {
  const navigate = useNavigate();

  const rules = [
    "Each question has a time limit of 30 seconds.",
    "You cannot skip questions.",
    "Each correct answer awards 10 points.",
    "No negative marking for incorrect answers.",
    "You can review your answers after completing the quiz.",
    "Make sure to answer every question to maximize your score.",
    "The quiz will auto-submit once the time limit is reached.",
    "Do not refresh the page during the quiz.",
    "Ensure a stable internet connection for a smooth experience.",
    "The quiz consists of 15 questions.",
    "No external help or resources are allowed during the quiz.",
    "You can only attempt the quiz once.",
    "Questions will be a mix of multiple-choice and true/false.",
    "Use the 'Next' button to move to the next question.",
    "The quiz is designed to test your knowledge fairly.",
    "You must log in with your account to participate.",
    "Sharing answers with others is strictly prohibited.",
    "Mobile phones and other devices should not be used for assistance.",
    "Double-check your answers before submitting.",
    "Partial answers will not be considered correct.",
    "All questions carry equal marks.",
    "The quiz timer will start as soon as you begin.",
    "Once a question is answered, it cannot be changed.",
    "If the quiz is interrupted, you may lose your progress.",
    "Only one user can participate per account.",
    "The leaderboard will be updated after the quiz ends.",
    "Read each question carefully before answering.",
    "Results will be displayed immediately after submission.",
    "Use the 'Submit' button only after answering all questions.",
    "Do not use browser back or forward buttons during the quiz.",
    "Any attempt to cheat will lead to disqualification.",
    "Ensure your device has sufficient battery before starting.",
    "The quiz works best on modern web browsers.",
    "Avoid distractions while taking the quiz.",
    "Use headphones if audio-based questions are included.",
    "In case of technical issues, contact the support team.",
    "Make sure your system clock is accurate to avoid time discrepancies.",
    "Screenshots or screen recording of the quiz is prohibited.",
    "Spamming or tampering with the quiz platform is forbidden.",
    "Results are final and cannot be contested.",
    "Feedback about the quiz can be submitted after completion.",
    "The quiz is timed; manage your time wisely.",
  ];

  const scrollToRules = () => {
    document
      .getElementById("rules-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const startQuiz = () => {
    navigate("/quiz"); // Navigates to the quiz page
  };

  return (
    <div className="container text-center mt-5">
      <div className="main-content">
        <div>
          <h1>Independence Day Quiz</h1>
          <p>Test your knowledge about Independence Day!</p>
          <div className="button-group mt-4 mb-5">
            <div className="mt-4">
              <StartButton text="Start Quiz" onClick={startQuiz} id="start-quiz" />
            </div>
            <div className="mt-4">
              <StartButton text="Rules" onClick={scrollToRules} id="rules-quiz" />
            </div>
          </div>
        </div>
      </div>

      <div id="rules-section" className="rules-container mt-5">
        <h2>Quiz Rules</h2>
        <ol>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </div>
      <div className="mt-4 mb-4">
        <StartButton text="Start Quiz" onClick={startQuiz} />
      </div>
    </div>
  );
};

export default StartPage;
