import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Words from './Words'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/quotes" element = {<Game />} />
                <Route path = "/words" element = {<Words />} />
            </Routes>
        </div>
    )
}