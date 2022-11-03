import { useState, useEffect } from 'react'
import axios from 'axios'

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














    const handleChange = (e) => {
        setUserInput(e.target.value)
        const quote = game.en
        const word = quote.split(' ')[0]
        


        
        if (userInput == word) {
            console.log(word)     
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




                <h2>Author: {game.author}</h2>
                <h3>
                        {game.en}
                </h3>

                <form onSubmit={handleSubmit}>

                    <input
                        className="user-input"
                        type="text"
                        value={userInput}
                        placeholder={game.en}
                        onChange={handleChange}
                        />

                </form>
               
                

                 <p className="written">{userInput}</p>

   
            </div>
        )

    }

}