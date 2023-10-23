import logo from './logo.svg';
import './App.css';
import Quiz from './quizs/quiz';
import { questions } from './quizs/questions';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './homepage';
import Result from './quizs/result';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz data={questions} />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  );
}


export default App;
