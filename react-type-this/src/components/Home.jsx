import { Link } from 'react-router-dom'


export default function () {
    return (
        <div className="typewriter-container">
            <p className="description">&lt; Hello world! Welcome to type.this! /&gt;</p>
            <p className="description2">&lt; Click one of the links /&gt;</p>
            <p className="description3">&lt; or search for a topic! /&gt;</p>
            <div className="game-nav">
                <Link to ="/technology">Tech</Link>
                <br/>
                <Link to ="/history">History</Link>
                <br />
                <Link to ="/sports">Sports</Link>
                <br />
                <Link to ="/competition">Competition</Link>
                <br />
                <Link to ="/success">Success</Link>
                <br />
                <Link to ="/inspirational">Inspirational</Link>
                <br />
                <Link to ="/business">Business</Link>
            </div>
        </div>
    )
}