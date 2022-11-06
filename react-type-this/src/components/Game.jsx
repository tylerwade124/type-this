import { useState, useEffect } from 'react'
import axios from 'axios'
// import Timer from './Timer'
import useTypingGame from 'react-typing-game-hook'
import typingSound from './sound/button.wav'
import resetSound from './sound/beep.wav'
// import Results from './Results'

export default function Game (props) {

        const [game, setGame] = useState({})

        const text = game.en






        const {
            states: { chars, charsState, errorChar, correctChar, startTime, endTime, currIndex, phase },
            actions: { insertTyping, resetTyping, deleteTyping, endTyping, getDuration, },
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

        //add winners audio on enter key



        





//test phases
//0 = not started
//1 = started
//2 = ended

//char state
//0 = incomplete
//1 = correct
//2 = incorrect

//default values
//skipCurrentWordOnSpace = true
//pauseOnError = false
//countErrors = evertime








    if (!game) {
        return <h1>Loading quote...</h1>
    } else {

    
        return (
            <div className="quote">
                {/* <Timer /> */}
                <h1
                className="words" 
                onKeyDown={e => {
                    const key = e.key;
                    if (key === 'Escape') {
                        resetTyping()
                        console.log('')
                        console.log('reset test')
                        audio2.play()
                    } else if (key === 'Backspace') {
                        deleteTyping(false)
                        audio.play()
                    } else if (key=== 'Enter') {
                        endTyping()
                        getDuration()
                        console.log('')
                        console.log(`test phase = ${phase}`)
                        console.log(`${currIndex + 2} character's typed`)
                        console.log(`${errorChar} error(s)`)
                        console.log(`${correctChar} correct characters`)
                        console.log(`${(endTime - startTime) / 1000} seconds / ${endTime - startTime} milliseconds`)
                        //console log characters per minute math equation

                        // <Results />

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
                    let color = state === 0 ? 'white' : state === 1 ? 'green' : 'red';
                    return (
                    <span key={char + index} style={{ color }}>
                        {char}
                    </span>
                    );
                })}
                </h1>
                <h3 className="author">- {game.author}</h3>
            </div>
          );
        };

}