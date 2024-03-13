//
import { useState } from "react"
import "./NewSkillForm.css"

// Define
const NewSkillForm = ({addSkill}) => {
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 3
    });

   function handleAddSkill(event) {
        event.preventDefault();
        addSkill(newSkill);
        setNewSkill({name: '', level: 3});
    }


    return (
        <form
            onSubmit={handleAddSkill} 
            action="" className="NewSkillForm">
            <label htmlFor="">Skill</label>
            <input 
                value={newSkill.name} onChange={(event)=> setNewSkill({...newSkill, name: event.target.value}) }
                type="text" 
            />
            <label htmlFor="">Level</label>
            <select 
                value={newSkill.level} onChange={(event)=> setNewSkill({...newSkill, level: parseInt(event.target.value, 10)})}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type='submit'>ADD SKILL</button>
        </form>


    )
}





//export
export default NewSkillForm