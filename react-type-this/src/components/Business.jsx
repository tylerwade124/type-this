import { useState, useEffect, } from 'react'
import axios from 'axios'
import useTypingGame from 'react-typing-game-hook'
import typingSound from './sound/button.wav'
import resetSound from './sound/beep.wav'

export default function Business (props) {

    const [game, setGame] = useState({})

    const text = game.content

    const {
        states: { chars, charsState, errorChar, correctChar, startTime, endTime, currIndex, phase },
        actions: { insertTyping, resetTyping, deleteTyping, endTyping, getDuration, },
      } = useTypingGame(text, {
        skipCurrentWordOnSpace: false,
        pauseOnError: false,
        countErrors: 'everytime'
      });


const getData = async() => {
    await axios.get('https://api.quotable.io/random?tags=business')
    .then(res =>  {
        if (res.data) {
            setGame(res.data)
            
        }
    })
}

  
  useEffect(() => {
    getData();
  }, []);


    const audio = new Audio(typingSound)
    
    audio.loop = false
    audio.volume = 0.2

    const audio2 = new Audio(resetSound)
    
    audio2.loop = false
    audio2.volume = 0.3

    //add winners audio on enter key


//test phases
//0 = not started
//1 = started
//2 = ended

//char state
//0 = incomplete
//1 = correct
//2 = incorrect



//MATH
const WPM = ((currIndex + 1) / 5) / ((endTime - startTime) / 60000)
const seconds = (endTime - startTime) / 1000
const minutes = (endTime - startTime) / 60000
const totalCharTyped = currIndex + 1
const accuracy = (correctChar / (currIndex + 1)) * 100
const adjustedWPM = WPM * (accuracy / 100)






    if (!game) {
        return <h1>Loading quote...</h1>
    } else {

    
        return (
            <div className="quote" id="quote">

                {/* <Timer /> */}
                
                <ul className="rules">
                    <li>Click on the quote to begin</li>
                    <li>Time begins when first character is typed</li>
                    <li>Hit escape to restart</li>
                    <li>Hit enter to submit</li>
                </ul>
               
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
                        audio2.play()
                        getData()
                        console.log('')
                        console.log(`test phase = ${phase}`)
                        console.log(`Total Characters = ${totalCharTyped}`)
                        console.log(`Correct Characters = ${correctChar}`)
                        console.log(`ALL errors(includes corrected errors) = ${errorChar}`)
                        console.log(`elapsed minutes = ${minutes}`)
                        console.log(`elapsed seconds = ${seconds}`)
                        console.log(`Accuracy = ${accuracy}%`)
                        console.log(`WPM(not including errors) = ${WPM}`)
                        console.log(`AWPM(including errors) = ${adjustedWPM}`)
                        alert(
                            `
                            WPM = ${adjustedWPM}
                            Accuracy = ${accuracy}%
                            Elapsed Time = ${seconds} seconds
                            Correct Characters = ${correctChar} / ${totalCharTyped}
                            Total Errors (includes corrected errors) = ${errorChar}
                            `
                        )






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
                    let color = state === 0 ? '#E6E9ED' : state === 1 ? '#44CF6C' : '#FF4365';
                    return (
                    <span key={char + index} style={{ color }}>
                        {char}
                    </span>
                    );
                })}
                </h1>
                
                <h3 className="author"
                    >- {game.author}</h3>
                
                
                
            </div>
          );
        };
}