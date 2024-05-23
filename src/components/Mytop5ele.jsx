import { Link } from "react-router-dom";
const Mytop5ele = (props) => {
    return ( 
        <div>
            <h3><span>{props.no}</span>{props.title}</h3>
            <img src={props.image} alt="image" />
            <Link><button>Watch Trailer</button></Link>
        </div>
     );
}
 
export default Mytop5ele;