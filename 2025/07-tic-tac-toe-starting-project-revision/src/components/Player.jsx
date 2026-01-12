import { useState } from "react";

export function Player({ playerName, symbol, onNameChange }) {
    // const [playerName, setPlayerName] = useState(defaultName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(prev => !prev);
    }

    const handleNameInput = (event) => {
        onNameChange(prev => {
            const updatedName = {...prev};
            updatedName[symbol] = event.target.value;

            return updatedName;
        })
    }


    return (<>
        <span className="player">
            {isEditing ?
                <input onChange={handleNameInput} value={playerName} type="text" /> :
                <span className="player-name"> {playerName}</span> 
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </>);
}