import { useState } from "react";

export default function Player({ playerName, playerSymbol, onSave, isActive, children }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName]= useState(playerName);

    function toggleEdit() {
        setIsEditing(oldValue => {
            const newValue = !oldValue;

            if (oldValue) onSave(playerSymbol, "newName"); // Trigger saving of new name

            return newValue;
        });
    }

    function onNameChange(event) {
        setName(event.target.value);
    }

    let playerNameComponent = <span className="player-name">{name}</span>;

    if (isEditing) {
        playerNameComponent = <input type="text" onChange={onNameChange} value={name}/>;
    }

    return (
        <li className="player">
            {playerNameComponent}
            <span className="player-symbol">{playerSymbol}</span>
            <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
            {children}
        </li>

    );
}
