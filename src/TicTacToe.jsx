import { useState } from 'react';
import { PlayerNameInput } from './PlayerNameInput.jsx';
export const TicTacToe = () => {
    const [playerName, setPlayerName] = useState('');

    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <div>
            <PlayerNameInput
                onChange={handleInputChange}
            />
        </div>
    )
}