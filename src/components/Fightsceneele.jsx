import { Link } from "react-router-dom"

const Fightsceneele = (props) => {
    return ( 
        <div>
            <Link to={props.link}><img src={props.image} alt="image"/></Link>
        </div>
     );
}
 
export default Fightsceneele;