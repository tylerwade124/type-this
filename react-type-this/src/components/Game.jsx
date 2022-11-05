import { useState, useEffect } from 'react'
import axios from 'axios'
import Timer from './Timer'
import useTypingGame from 'react-typing-game-hook'
import typingSound from './sound/button.wav'
import resetSound from './sound/beep.wav'

export default function Game (props) {

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

        // const splitText = text.split(' ')



        const audio = new Audio(typingSound)
        audio.loop = false
        audio.volume = 0.4

        const audio2 = new Audio(resetSound)
        audio2.loop = false
        audio2.volume = 0.25


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
                    resetTyping()
                    audio2.play()
                    } else if (key === 'Backspace') {
                    deleteTyping(false)
                    audio.play()
                    } else if (key.length === 1) {
                    insertTyping(key);
                    audio.play()

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