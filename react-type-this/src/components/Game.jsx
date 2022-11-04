import { useState, useEffect } from 'react'
import axios from 'axios'
import Timer from './Timer'

export default function Game () {



        const [game, setGame] = useState({})
        const [userInput, setUserInput] = useState('')





        useEffect(() => {
            const getData = async() => {
            const response = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
            setGame(response.data)
}
        getData()
}, [])



    //if user has not pressed space then don't go to next word


    const handleChange = (e) => {
        setUserInput(e.target.value)
        const quote = game.en
        const splitArray = quote.split(' ')
        splitArray.join()

        for (let i = 0; i < splitArray.length; i++) {
            let word = splitArray[i]
            if (userInput == splitArray[i]) {
                console.log(word)
                setUserInput('')
            }

        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
            if (userInput === game.en) {
                console.log(`SUCCESSFUL`)
            }
            if (userInput !== game.en) {
                console.log(`UNSUCCESSFUL`)
            }
        console.log(game)
    }







    if (!game) {
        return <h1>Loading...</h1>
    } else {

    
        return (
            <div>
                <Timer />
                <h2>Author: {game.author}</h2>


                <form onSubmit={handleSubmit}>

                    <h3>{game.en}</h3>

                    <input
                        className="start-button"
                        type="button"
                        value="Start"
                        />

                    <input
                        className="user-input"
                        type="text"
                        value={userInput}
                        onChange={handleChange}
                        />
                    

                </form>
               
                

   
            </div>
        )

    }

}