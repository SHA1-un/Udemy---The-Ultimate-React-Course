import { useState, useEffect, useCallback } from "react";
import questions from "../data/questions";
import QuestionTimer from "./QuestionTimer";
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

    const shuffledAnswers = [...currentQuestion.answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    key={activeQuestionIndex}
                    maxTime={QUESTION_TIME}
                    handleSelectAnswer={handleSelectAnswer}
                />
                <h2>{activeQuestionIndex + 1}. {currentQuestion.text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer, index) => {
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