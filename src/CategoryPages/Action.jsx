import Footer from "../components/Footer";
import Header from "../components/Header";
import Actioncomp from "./CategoryComponents/ActionCom";
import { useState, useEffect } from "react";

const Action = () => {
    
    let [action, setAction] = useState(null)
    const fetchData = () =>{
        let apiUrl = 'https://movie-site-stapi.onrender.com/api/actions?populate=*'

        fetch(apiUrl)
        .then((response)=>{
            return response.json()
        })
        .then((dataObj)=>{
            let action5 = dataObj.data
            setAction(action5)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return ( 
        <div>
            <Header/>
            <section>
                <h2>My best top 5 movies for Action</h2>
                <div>
                {
                action !== null? (
                    action.map((ele, index)=>{
                        return <Actioncomp key={index}
                        no={ele.attributes.number}
                        title={ele.attributes.title}
                        image={`http://localhost:1337${ele.attributes.image.data.attributes.url}`}
                        />
                    })
                ):
                <p>Loading</p>
            }
                </div>
            </section>

            <Footer/>
        </div>
     );
}
 
export default Action;