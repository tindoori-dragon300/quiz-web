import React, { useState } from 'react';
import QuizProcess from './process';
import Option from './option';
import { useNavigate } from 'react-router-dom';

export default function Quiz({ data }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    function checkPrevious() {
        if (currentQuestion === 0) {
            alert("You are at the beginning baby!")
        } else {
            resetAllOptions();
            setCurrentQuestion(currentQuestion - 1);
            //写code：把所有带有“active” 的option的classname还原成“option_container”
        }
    }
    function checkNext() {
        var length = data.length;
        if (currentQuestion === length - 1) {
            navigate('/result', { state: { finalScore: score } });
        } else {
            resetAllOptions();
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    function resetAllOptions() {
        const options = document.querySelectorAll('.option_container');
        options.forEach((option) => {
            option.className = "option_container";
        });
    }



    return (<>
        <div className="quiz-container">
            <QuizProcess number={currentQuestion} />

            <div className="question_section">
                <div className='question_text_div'>
                    <a className='question_text'>   Question {currentQuestion + 1} :{data[currentQuestion].questionText}</a>
                </div>

                <div className="options">
                    {data[currentQuestion].answerOptions.map((option, index) => (
                        <Option
                            key={index}
                            onClick={() => {
                                setScore(score + option.score);
                                resetAllOptions(); // Reset all options when a new option is clicked
                                document.querySelector(`.option_container:nth-child(${index + 1})`).className = "option_container active"
                            }}
                            imgPath={option.img}
                            text={option.answerText}
                        />
                    ))}
                </div>

            </div>

            <div className='footer'>
                <button className='previous' onClick={checkPrevious}>Previous</button>

                <div>
                    <button className='next' onClick={checkNext}>Next</button>
                    <a className="skip_text" onClick={checkNext}>Skip</a>
                </div>
            </div>

        </div >
    </>);
}