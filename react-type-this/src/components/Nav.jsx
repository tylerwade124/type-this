import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to ="/">Home</Link>
            <br />
            <Link to ="/game">Play</Link>
        </div>
    )
}