import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../data/questions"

export default function ResultModal({ answers }) {
    let numberAnswered = 0;
    let numberSkipped = 0;
    let numberCorrect = 0;
    let numberIncorrect = 0;

    for (const [index, answer] of answers.entries()) {
        answer ? numberAnswered++ : numberSkipped++;
        QUESTIONS[index].answers[0] === answer ? numberCorrect++ : numberIncorrect++;
    }

    function getPercentage(number) {
        return number ? (number / answers.length * 100).toFixed(0) : 0;
    }

    const skippedPercentage = getPercentage(numberSkipped);
    const correctPercentage = getPercentage(numberCorrect);
    const incorrectPercentage = getPercentage(numberIncorrect);

    return <div id="summary">
        <img src={quizComplete} alt="" />
        <h2>Quiz Complete</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedPercentage}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{correctPercentage}%</span>
                <span className="text">Correct</span>
            </p>
            <p>
                <span className="number">{incorrectPercentage}%</span>
                <span className="text">Incorrect</span>
            </p>
        </div>
        <ol>
            {QUESTIONS.map((question, index) => {
                let cssClass = "skipped";
                if (answers[index]) cssClass = question.answers[0] === answers[index] ? "correct" : "wrong"; 
                return <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{question.text}</p>
                    <p className={"user-answer " + cssClass}>{answers[index] ?? "Skipped"}</p>
                </li>
            })}
        </ol>
    </div>
}