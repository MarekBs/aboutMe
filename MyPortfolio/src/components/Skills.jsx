import React from "react";

const skillsWithProficiency = [
  { skill: "HTML", proficiency: "advanced" },
  { skill: "CSS", proficiency: "intermediate" },
  { skill: "JavaScript", proficiency: "advanced" },
  { skill: "Java", proficiency: "intermediate" },
  { skill: "Python", proficiency: "beginner" },
  { skill: "C", proficiency: "intermediate" },
  { skill: "C++", proficiency: "intermediate" },
];


const proficiencyLegend = {
  "beginner": 1,
  "intermediate": 2,
  "advanced": 3,
  "expert": 4, 
};

const skillsRows = skillsWithProficiency.map((skill, index) => (
  <tr key={index} >
    <td className="font-weight-bold">{skill.skill}</td>
    <td className={skill.proficiency}>{proficiencyLegend[skill.proficiency]}</td>
  </tr>
));

export default function Skills({mode}) {
  return (
    < >
    <h1 className={`text-center text-xl mb-4 text-light`}>Skills</h1>
    <p className="text-center mb-4  text-light">In this section you can see my skill levels in certain programming languages.</p>
    <div className="container text-center">
      <table className="table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {skillsRows}
        </tbody>
      </table>
      <div className="legend">
        <ul className="legendOptions">
          {Object.entries(proficiencyLegend).map(([level, number]) => (
            <li key={number} className={level}>
              {number}: {level}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
