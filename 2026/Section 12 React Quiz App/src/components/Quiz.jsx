import { useState, useEffect, useCallback } from "react";
import questions from "../data/questions";
import ProgressBar from "./ProgressBar";
import ResultModal from "./ResultModal";


const QUESTION_TIME = 15000;
export default function Quiz() {
    const [answers, setAnswers] = useState([]);

    const activeQuestionIndex = answers.length;
    const currentQuestion = questions[activeQuestionIndex];
    const quizOver = activeQuestionIndex === questions.length;
    
    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswers(prevAnswers => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });
    }, []);
    
    if (quizOver) return <ResultModal />

    const shuffeldAnswers = [...currentQuestion.answers];
    shuffeldAnswers.sort(() => Math.random() - 0.5);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("times up!");
            handleSelectAnswer(null); // user took too long to select answer
        }, QUESTION_TIME);

        return () => clearTimeout(timeout);
    }, [handleSelectAnswer]);

    return (
        <div id="quiz">
            <ProgressBar maxTime={QUESTION_TIME}/>
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