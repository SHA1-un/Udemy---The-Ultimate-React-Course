export default function TabButton({onClick, isActive, children}) {
    return (
        <button className={isActive ? "active" : ""} onClick={onClick} >{children}</button>
    );
}