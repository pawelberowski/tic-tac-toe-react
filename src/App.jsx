import { useState } from 'react';
import { PlayerNameInput } from './PlayerNameInput.jsx';
import { StartButton } from "./StartButton.jsx";
import styles from './startScreen.module.css'
import {Tile} from "./Tile.jsx";
export const App = () => {
    const [playerName, setPlayerName] = useState('');

    const [show, setShow] = useState(true);

    const [tiles, setTiles] = useState(['','','','','','','','','']);

    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    }

    const handleStart = () => {
        setShow(!show);
    }

    return (
        <div>
            { show ? <div className={styles.startScreen}>
                <PlayerNameInput
                    shape='circle'
                    onChange={handleInputChange}
                    show={show}
                />
                <PlayerNameInput
                    shape='cross'
                    onChange={handleInputChange}
                    show={show}
                />
                <StartButton
                    onClick={handleStart}
                />
            </div> : null }

            { !show ? <div className="board">
                {tiles.map((tile, index) => <Tile key={index} id={index} tile={tile}/>)}
            </div> :null }

        </div>

    )
}