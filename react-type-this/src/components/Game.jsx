import { useState, useEffect } from 'react'
import axios from 'axios'
import Timer from './Timer'
import useTypingGame from 'react-typing-game-hook'

export default function Game () {

        const [game, setGame] = useState({})

        const text = game.en

        const {
            states: { chars, charsState },
            actions: { insertTyping, resetTyping, deleteTyping },
          } = useTypingGame(text);

        useEffect(() => {
            const getData = async() => {
            const response = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
            setGame(response.data)
}
        getData()
}, [])



    if (!game) {
        return <h1>Loading...</h1>
    } else {

    
        return (
            <div className="quote">
                <Timer />
                <h1
                className="words"
                onKeyDown={e => {
                    const key = e.key;
                    if (key === 'Escape') {
                    resetTyping();
                    } else if (key === 'Backspace') {
                    deleteTyping(false);
                    } else if (key.length === 1) {
                    insertTyping(key);
                    }
                    e.preventDefault();
                }}
                tabIndex={0}
                >
                {chars.split('').map((char, index) => {
                    let state = charsState[index];
                    let color = state === 0 ? 'Azure' : state === 1 ? 'green' : 'red';
                    return (
                    <span key={char + index} style={{ color }}>
                        {char}
                    </span>
                    );
                })}
                </h1>
            </div>
          );
        };

}