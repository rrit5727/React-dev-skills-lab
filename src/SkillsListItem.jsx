//import

import SkillsList from "./SkillsList";
import "./SkillsListItem.css";



//define 
const SkillsListItem = ({ skill, index}) => {
    return (
    <li className="SkillListItem">
       <span className="level"> { skill.name } </span><span className="level"> Level: {skill.level} </span>
    </li>
    )
}







//export
export default SkillsListItem
