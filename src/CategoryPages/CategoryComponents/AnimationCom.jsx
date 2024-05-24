import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Animatoncomp = (props) => {


    return ( 
        <div>
            <h3 className="text-center"><span>{props.no}</span>{props.title}</h3>
            <img src={props.image} alt="image" className="w-[300px] h-[300px]"/>
            <div className="text-center">
            <Link><button>Watch Trailer</button></Link>

            </div>
            
        </div>
     );
}
 
export default Animatoncomp;