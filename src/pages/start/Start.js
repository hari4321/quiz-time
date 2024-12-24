import './Start.css'
import { Link } from 'react-router-dom';

import StartButton from '../../components/buttons/start/StartButton';

const StartPage = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Independence Day Quiz</h1>
            <p>Test your knowledge about Independence Day!</p>
            <Link to="/quiz">
                <StartButton />
            </Link>
        </div>
    );
};

export default StartPage;
