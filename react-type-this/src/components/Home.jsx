import { Link } from 'react-router-dom'


export default function Home () {
    return (
        <div className="terminal">
            <div className="typewriter-container">
                <div className ="terminal-bar">
                    <div className ="terminal-buttons">
                        <div className ="red"></div>
                        <div className ="yellow"></div>
                        <div className ="green"></div>
                    </div>
                </div>
                <div className="description-container">
                    <p className="description">~ Hello world! Welcome to type.this!</p>
                    <p className="description2">~ Click one of the links below!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
                {/* <p className="description3">&lt; or search for a topic! </p> */}

            </div>
            <div className="game-nav">
                    <Link className="link" to ="/technology">Tech</Link>
                    <br/>
                    <Link className="link" to ="/history">History</Link>
                    <br />
                    <Link className="link" to ="/sports">Sports</Link>
                    <br />
                    <Link className="link" to ="/competition">Competition</Link>
                    <br />
                    <Link className="link" to ="/success">Success</Link>
                    <br />
                    <Link className="link" to ="/inspirational">Inspirational</Link>
                    <br />
                    <Link className="link" to ="/business">Business</Link>
                </div>
        </div>
    )
}