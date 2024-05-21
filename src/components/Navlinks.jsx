import { Link } from "react-router-dom";

const Navlinks = (props) => {
    return ( 
            <Link to={props.to}><li>{props.link}</li></Link>
     );
}
 
export default Navlinks;