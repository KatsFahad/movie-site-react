import { useEffect, useState } from "react";
import Mytop5ele from "./Mytop5ele";

const Mytop5 = () => {
    let [top5, setTop5] = useState(null)
    const fetchData = () =>{
        let apiUrl = 'https://movie-site-stapi.onrender.com/api/top5s?populate=*'

        fetch(apiUrl)
        .then((response)=>{
            return response.json()
        })
        .then((dataObj)=>{
            let top5Data = dataObj.data
            setTop5(top5Data)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])


    return ( 
        <div>
           <h2> My best top 5 movies from all Categories</h2>
           <div className="flex mx-[1.5rem] gap-[4rem]">
            {
                top5 !== null? (
                    top5.map((ele, index)=>{
                        return <Mytop5ele key={index}
                        no={ele.attributes.number}
                        title={ele.attributes.title}
                        image={`http://localhost:1337${ele.attributes.image.data.attributes.url}`}
                        />
                    })
                ):
                <p>Loading</p>
            }

           </div>
        </div>
     );
}
 
export default Mytop5;