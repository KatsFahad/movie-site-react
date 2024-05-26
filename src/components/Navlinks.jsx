import { Link } from "react-router-dom";

const Navlinks = (props) => {
    return ( 
            <Link to={props.to} className="text-[#5cfaff] text-[25px]"><li>{props.link}</li></Link>
     );
}
 
export default Navlinks;