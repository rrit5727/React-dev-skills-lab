//import stuff
import SkillsListItem from "./SkillsListItem";



// define the React functional component
const SkillsList = ({ skills }) => {
    const SkillsListItems = skills.map((s, idx) => <SkillsListItem skill={s} key={idx}/>)
    return  (
        <ul className="SkillsList">                
            { SkillsListItems } 
        </ul>
    )
}




//export it
export default SkillsList