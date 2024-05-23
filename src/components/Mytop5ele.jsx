import { Link } from "react-router-dom";
const Mytop5ele = (props) => {
    return ( 
        <div>
            <h3 className="text-center"><span>{props.no}</span>{props.title}</h3>
            <img src={props.image} alt="image" className="w-[300px] h-[300px]"/>
            <Link><button>Watch Trailer</button></Link>
        </div>
     );
}
 
export default Mytop5ele;