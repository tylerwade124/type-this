import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Game () {
    //create a state for data
        const [game, setGame] = useState({})
    //call axios function
        useEffect(() => {
            const getData = async() => {
            const response = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
            console.log(response.data)
    //set state of our data
            setGame(response.data)
}
        getData()
}, [])

    //see the data
    console.log(game)

    //also make guard operator -- if data takes a few seconds -- our site doesnt break





    if (!game) {
        return <h2> Loading please wait </h2>
    } else {

    
    return (
        <div>
            <h3>Author: {game.author}</h3>
            <p>Quote: {game.en}</p>
        </div>
    )
    }
}