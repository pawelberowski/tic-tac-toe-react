import { useState } from 'react';
import { PlayerNameInput } from './PlayerNameInput.jsx';
import { StartButton } from "./StartButton.jsx";
import styles from './startScreen.module.css'
export const App = () => {
    const [playerName, setPlayerName] = useState('');

    const [show, setShow] = useState(true);
    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    }

    const handleStart = () => {
        setShow(!show);
    }

    return (
        <div className={styles.startScreen}>
            { show ? <PlayerNameInput
                shape='circle'
                onChange={handleInputChange}
                show={show}
            /> : null }

            { show ? <PlayerNameInput
                shape='cross'
                onChange={handleInputChange}
                show={show}
            /> : null }

            { show ? <StartButton
                onClick={handleStart}
            /> : null }

        </div>
    )
}