import { useState, useEffect } from 'react'
import '../App.css'

export default function Results (props) {





    return(
        <div className="results-page">
            <h1>RESULTS</h1>
            <p>WPM = {props.adjustedWPM}</p>
        </div>
    )
}