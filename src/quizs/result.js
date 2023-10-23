import React from "react";
import { useLocation } from 'react-router-dom';
export default function Result() {
    const location = useLocation();
    const score = location.state?.finalScore || 0; // Fallback to 0 if state is not available

    const List = [
        { text: "WOLF - STRENGTH, LOYALTY, AND FREEDOM ", img: "/animals/wolf.jpg" },
        { text: "ELEPHANT - WISDOM, STRENGTH, AND STABILITY", img: "/animals/elephant.png" },
        { text: "OWL - WISDOM, INTUITION, AND KNOWLEDGE", img: "/animals/owl.png" },
        { text: "BEAR - COURAGE, STRENGTH, AND PROTECTION", img: "/animals/bear.png" },
        { text: "LION - POWER, COURAGE, AND LEADERSHIP", img: "/animals/lion.png" },
        { text: "DEER - GRACE, GENTLENESS, AND NEW BEGINNINGS", img: "/animals/deer.png" },
        { text: "FOX - CUNNING, VERSATILITY, AND ADAPTABILITY", img: "/animals/fox.png" },
        { text: "BUTTERFLY - TRANSFORMATION, GROWTH, AND BEAUTY", img: "/animals/butterfly.png" },
        { text: "FOX - CUNNING, VERSATILITY, AND ADAPTABILITY", img: "/animals/fox.png" },
        { text: "TIGER - POWER, COURAGE, AND DETERMINATION", img: "/animals/tiger.jpeg" },
        { text: "EAGLE - FREEDOM, VISION, AND STRENGTHY", img: "/animals/eagle.png" },
        { text: "BONUS: PHOENIX - REBIRTH, RENEWAL, AND TRANSFORMATION", img: "/animals/phoenix.png" }
    ]

    let i;
    if (score < 12) {
        i = 0;
    } else if (score < 20) {
        i = 1;
    } else if (score < 25) {
        i = 2;
    } else if (score < 30) {
        i = 3;
    } else if (score < 35) {
        i = 4;
    } else if (score < 40) {
        i = 5;
    } else if (score < 45) {
        i = 6;
    } else if (score < 46) {
        i = 7;
    } else if (score < 48) {
        i = 8;
    } else if (score < 52) {
        i = 9;
    } else if (score < 55) {
        i = 10;
    } else {
        i = 11;
    }

    return (<>
        <div className="result_container">
            <p>You are a ---</p>

            <div className="circle_container">
                <img className="result_circle" src="https://www.svgheart.com/wp-content/uploads/2020/06/animals-monogram-frame-free-svg-file.png" />
                <img className="centered_image" src={List[i].img} />
            </div>

            <p>{List[i].text}</p>

            <a href="https://www.tindoori.com/">Check to see more in Tindoori about Cultural topics-->
            </a>
            <img className="tindoori_logo" src="tindoori-logo.svg" />
        </div>


    </>);
}

