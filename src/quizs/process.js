

export default function QuizProcess({ number }) {
    return (<>
        <div className="quizProcess">
            {Array.from({ length: 12 }).map((_, index) => (
                <span id="question_mark"
                    key={index}
                    className={`question ${index + 1}`}
                    style={index === number ? { backgroundColor: '#94E4B4' } : { backgroundColor: '#BDBDBD' }}
                >{index + 1}</span>
            ))}
        </div>
    </>)
}