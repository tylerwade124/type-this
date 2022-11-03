import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Game from './Game'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/game" element = {<Game />} />
            </Routes>
        </div>
    )
}