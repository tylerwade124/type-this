import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Technology from './Technology'
import History from './History'
import Sports from './Sports'
import Competition from './Competition'
import Success from './Success'
import Inspirational from './Inspirational'
import Business from './Business'


export default function Main () {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/technology" element = {<Technology />} />
                <Route path = "/history" element = {<History />} />
                <Route path = "/sports" element = {<Sports />} />
                <Route path = '/competition' element = {<Competition />} />
                <Route path = '/success' element = {<Success />} />
                <Route path = '/inspirational' element = {<Inspirational />} />
                <Route path = '/business' element = {<Business />} />
            </Routes>
        </div>
    )
}