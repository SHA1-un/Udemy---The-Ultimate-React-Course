import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";

import QUESTIONS from "../data/questions";

const QUESTION_TIME = 15000;
export default function Question({ index, onSelectAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    });

    const currentAnswers = QUESTIONS[index].answers;
    
    let timer = QUESTION_TIME;
    if (answer.selectedAnswer) timer = 1000;
    if (answer.isCorrect !== null) timer = 2000;

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: currentAnswers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);

            }, 2000);
        }, 1000);

    }

    let answerState = "";
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return <div id="question">
        <QuestionTimer
            maxTime={timer}
            handleSelectAnswer={handleSelectAnswer}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
            answers={currentAnswers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
        />
    </div>
}