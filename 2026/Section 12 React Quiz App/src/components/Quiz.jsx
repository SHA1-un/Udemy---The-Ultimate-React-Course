import { useState } from "react";
import questions from "../data/questions";
import ProgressBar from "./ProgressBar"

export default function Quiz() {

    // Idea: we would create a new context file to manage the current question index and answered questions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    function nextQuestion() {
        setCurrentQuestionIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            if (nextIndex + 1 > questions.length) return prevIndex;

            return nextIndex
        });
    }

    return (
        <div>
            <ProgressBar />
            <p>{currentQuestionIndex + 1}. {currentQuestion.text}</p>
            <ul>
                {currentQuestion.answers.map((answer) => {
                    return <li>
                        <button onClick={nextQuestion}>
                            {answer}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}