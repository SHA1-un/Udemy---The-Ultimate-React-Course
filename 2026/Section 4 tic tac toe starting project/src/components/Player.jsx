import { useState } from "react";

export default function Player({ playerName, playerSymbol, onSave, isActive, children }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingName, setEditingName]= useState(playerName);

    function toggleEdit() {
        setIsEditing(oldValue => {
            const newValue = !oldValue;

            if (oldValue) onSave(playerSymbol, editingName); // Trigger saving of new name

            return newValue;
        });
    }

    function onNameChange(event) {
        setEditingName(event.target.value);
    }

    let playerNameComponent = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerNameComponent = <input type="text" onChange={onNameChange} value={editingName}/>;
    }

    return (
        <li className={`active`}>
            <span className={`player`}>
                {playerNameComponent}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
            {children}
        </li>
    );
}
