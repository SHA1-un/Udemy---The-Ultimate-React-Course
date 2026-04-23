import { useState } from "react";
import questions from "../data/questions";
import ProgressBar from "./ProgressBar";
import ResultModal from "./ResultModal";

export default function Quiz() {
    const [answers, setAnswers] = useState([]);

    const activeQuestionIndex = answers.length;
    const currentQuestion = questions[activeQuestionIndex];
    const quizOver = activeQuestionIndex === questions.length;
    
    function handleSelectAnswer(selectedAnswer) {
        setAnswers(prevAnswers => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });
    }
    
    if (quizOver) return <ResultModal />

    const shuffeldAnswers = [...currentQuestion.answers];
    shuffeldAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <ProgressBar />
            <div id="question">
                <h2>{activeQuestionIndex + 1}. {currentQuestion.text}</h2>
                <ul id="answers">
                    {shuffeldAnswers.map((answer, index) => {
                        return <li key={index} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}