import { Link } from 'react-router-dom'

import Game from './Game'

export default function () {
    return (
        <div className="typewriter-container">
            <p className="description">&lt;h1&gt; Hello world! Welcome to type.this! &lt;/h1&gt;</p>
            <p className="description2">&lt;h2&gt; A software engineer's typing game &lt;/h2&gt;</p>
            <p className="description3">&lt;p&gt; Click Play! &lt;/p&gt;</p>
            <div className="game-nav">
                <Link to ="/game">Play</Link>
            </div>
        </div>
    )
}