import headerImage from "../assets/logo.jpg"

export default function Header() {
    return <div id="main-header">
        <h1 id="title">
            <img src={headerImage} alt="" />
            ReactFood
        </h1>
        <button className="text-button">
            Cart
        </button>
    </div>
}