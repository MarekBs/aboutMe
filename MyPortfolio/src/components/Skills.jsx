import React from "react"

const skills = ["HTML","CSS","JavaScript","Java","Python","C","C++"]


const skillsItems = skills.map(skill => (
     <li className="list-group-item" key={skill}>{skill}</li>

));


export default function Skills() {
    return(
        <div className="container">
  <ul className="list-group">
    {skillsItems}
  </ul>
</div>

    )
}