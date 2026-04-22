import { useState } from "react";
import questions from "../data/questions";
import ProgressBar from "./ProgressBar"

export default function Quiz() {
    const [answers, setAnswers] = useState([]);
    const activeQuestionIndex = answers.length < questions.length ? answers.length : questions.length - 1;
    const currentQuestion = questions[activeQuestionIndex];

    function handleSelectAnswer(selectedAnswer) {
        if (activeQuestionIndex === questions.length - 1) return;

        setAnswers(prevAnswers => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });
    }

    return (
        <>
            <ProgressBar />
            <div id="quiz">
                <div id="question">
                    <h2>{activeQuestionIndex + 1}. {currentQuestion.text}</h2>
                    <ul id="answers">
                        {currentQuestion.answers.map((answer, index) => {
                            return <li key={index} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)}>
                                    {answer}
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}