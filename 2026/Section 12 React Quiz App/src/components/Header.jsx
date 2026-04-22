import logo from "../assets/quiz-logo.png";

export default function Header({ title }) {
    return <>
        <header>
            <img src={logo} />
            <h1>{title}</h1>
        </header>
    </>
}