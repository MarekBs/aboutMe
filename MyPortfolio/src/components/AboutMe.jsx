import React from "react"
import Card from "./Card"
import "../styles/aboutMe.css"
import GitLogo from "../assets/git.png"


export default function AboutMe(){
    return(
        <div className="aboutMe--wrapper">
       <Card />
       <div className="liks--wrapper">
        <a  target="_blank" href="https://github.com/MarekBs"><img className="git--logo" src={GitLogo} alt="GitHub logo" /></a>
        
       </div>
       </div>
       
    )
  
}