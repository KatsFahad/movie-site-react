import { Link } from "react-router-dom";

const Navlinks = (props) => {
    return ( 
            <Link to={props.to} className="text-[#5cfaff] text-[25px] hover:text-[black] hover:bg-[#5cfaff] hover: rounded-[10px] @412: hover:text-[blue] hover:bg-[black]"><li>{props.link}</li></Link>
     );
}
 
export default Navlinks;