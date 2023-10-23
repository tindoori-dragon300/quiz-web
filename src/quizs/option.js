import { useState, useEffect } from "react";
export default function Option({ imgPath, text, onClick, active }) {
    const [internalActive, setInternalActive] = useState(false);
    useEffect(() => {
        setInternalActive(active);
    }, [active]);

    const handleOptionClick = () => {
        setInternalActive(true); // Set the internal active state to true when the option is clicked
        onClick(); // Call the provided onClick function
    };
    return (<>
        <div
            className={`option_container ${internalActive ? "active" : ""}`}
            onClick={handleOptionClick}
        >
            <img src={imgPath} alt="optionimg" />
            <div className="op_text">
                {text}
            </div>
        </div>
    </>)
}