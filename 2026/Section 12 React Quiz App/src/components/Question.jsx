import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const QUESTION_TIME = 15000;
export default function Question({userAnswers, answerState, currentQuestion, handleSelectAnswer }) {
    return <div id="question">
        <QuestionTimer
            maxTime={QUESTION_TIME}
            handleSelectAnswer={handleSelectAnswer}
        />
        <h2>{currentQuestion.text}</h2>
        <Answers
            answers={currentQuestion.answers}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            answerState={answerState}
            onSelect={handleSelectAnswer}
        />
    </div>
}