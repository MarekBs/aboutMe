import React, {useState} from "react"
import "../style.css"
import sunLight from"../assets/light.png"
import sunDark from"../assets/dark.png"
import htmlImg from"../assets/html1.png"


export default function Header({mode, changeMode}){
    
 
    return(
        <header>
      <nav className={`navbar navbar-expand-lg ${mode ? 'navbar-light ' : 'navbar-dark '}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        about ME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="sun--wrappper" onClick={changeMode}>
            <img className={`sun ${mode ? "sun-rotaterev" : "sun-rotate"}`}  height={20} src={mode ?sunLight : sunDark} alt="sun" />
            </div>
        </div>
      </div>
    </nav>
    </header>
    )
}