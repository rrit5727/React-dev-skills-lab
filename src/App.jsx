import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillsList from './SkillsList'
import NewSkillForm from './NewSkillForm'

const skills = 
[
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  const [skills, setSkills] = useState([
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 }
]);
  
function addSkill(skill) {
  setSkills([...skills, skill])
}


  return (    
      <div className="App">
        <h1>React Dev Skills</h1>
        <SkillsList skills={ skills }/>
        <hr />
        <NewSkillForm addSkill={addSkill}/>
      </div>    
    
  );
}

export default App
