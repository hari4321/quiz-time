import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartPage from './pages/start/Start';
import QuizPage from './pages/quiz/Quiz';
import ResultPage from './pages/result/Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/quiz" element={<QuizPage/>} />
          <Route path="/result" element={<ResultPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
