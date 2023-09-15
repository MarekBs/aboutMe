import React from "react"
import profilePhoto from "../assets/fta.png"



export default function Card(){
    return(
        <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={profilePhoto} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Marek Belis</h5>
        <p className="card-text">Hello, my name is Marek and I am currently studying applied informatics at FEI STU Bratislava 3.rd year.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Age: 22</li>
        <li className="list-group-item">Student</li>
      </ul>
    </div>
    )
  
}