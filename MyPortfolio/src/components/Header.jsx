import React, {useState} from "react"
import "../style.css"
import sunLight from"../assets/light.png"
import sunDark from"../assets/dark.png"


export default function Header(){
    const [mode, setMode] = useState(true)

    

    function changeMode(){
        setMode(prevMode => !prevMode);
        document.body.className = mode ? "dark--mode" : "light--mode";
        console.log(document.body.classList)
    }
 
    return(
        <header className="header--container">
            <h1>about ME</h1>
            <div className="sun--wrappper" onClick={changeMode}>
            <img className={`sun ${mode ? "sun-rotaterev" : "sun-rotate"}`}  height={20} src={mode ?sunLight : sunDark} alt="sun" />
            </div>
        </header>
    )
}