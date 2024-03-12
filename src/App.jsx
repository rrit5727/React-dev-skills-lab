import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillsList from './SkillsList'
import NewSkillForm from './NewSkillForm'

function App() {
  return (    
      <div className="App">
        <h1>React Dev Skills</h1>
        <SkillsList />
        <hr />
        <NewSkillForm />
      </div>    
    
  );
}

export default App
