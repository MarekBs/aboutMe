import React from "react"
import Card from "./Card"
import "../styles/aboutMe.css"
import GitLogo from "../assets/git.png"
import LILogo from "../assets/Linkedin-Logo.png"
import Fei from "../assets/fei.png"


export default function AboutMe({mode}){
    return(
        <div className={`aboutMe--wrapper ${mode ? "aboutMe--blur":"aboutMe--blur-black"} border-bottom border-secondary`}>
       <Card mode={mode} />
       <div className="liks--wrapper">
        <a  target="_blank" href="https://github.com/MarekBs"><img className="git--logo" src={GitLogo} alt="GitHub logo" /></a>
        <a  target="_blank" href="https://www.linkedin.com/in/marek-belis-a11591231/"><img className="git--logo" src={LILogo} alt="LinkedIn logo" /></a>
        <a  target="_blank" href="https://www.fei.stuba.sk/"><img className="git--logo" src={Fei} alt="FEI-STU logo" /></a>
       </div>
       </div>
       
    )
  
}