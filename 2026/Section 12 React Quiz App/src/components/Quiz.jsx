import { useState, useCallback } from "react";
import QUESTIONS from "../data/questions";
import ResultModal from "./ResultModal";
import Question from "./Question";

export default function Quiz() {
    // const [answerState, setAnswerState] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizOver = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers(prevAnswers => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });

    }, []);

    if (quizOver) return <ResultModal />

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    )
}