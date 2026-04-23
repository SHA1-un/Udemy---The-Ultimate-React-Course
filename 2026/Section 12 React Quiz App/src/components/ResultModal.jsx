import quizComplete from "../assets/quiz-complete.png";

export default function ResultModal() {
    return <div id="summary">
        <img src={quizComplete} alt="" />
        <h2>Quiz Complete</h2>
    </div>
}