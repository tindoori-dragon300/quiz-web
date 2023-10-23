import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="App">
                <div>
                    <div>
                        <h1>What is your spirit animal?</h1>
                        <p>
                            Many people around the world feel a kinship with their spirit animal. In fact, Native Americans believe you can have more than one. Your spirit animal guides you during important times in your life and they are with you throughout your lifetime. Enjoy the quiz!
                        </p>
                        <button onClick={() => navigate('/quiz')}>Start solving</button>
                    </div>
                </div>
                <img src='homepage.png' alt="homepage" />
            </div>
        </>
    );
}
    