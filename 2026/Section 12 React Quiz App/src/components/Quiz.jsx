import { useState, useCallback } from "react";
import QUESTIONS from "../data/questions";
import ResultModal from "./ResultModal";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState("");

    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const currentQuestion = QUESTIONS[activeQuestionIndex];
    const quizOver = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState("answered");
        setUserAnswers(prevAnswers => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });

        setTimeout(() => {
            const result = selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0] ? "correct" : "wrong";
            setAnswerState(result);

            setTimeout(() => {
                setAnswerState("");
            }, 2000);
        }, 1000);

    }, [activeQuestionIndex]);

    if (quizOver) return <ResultModal />

    return (
        <div id="quiz">
            
        </div>
    )
}