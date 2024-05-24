import Footer from "../components/Footer";
import Header from "../components/Header";
import Adventurecomp from "./CategoryComponents/AdventureCom";
import { useState, useEffect } from "react";

const Adventure = () => {

  let [adventure, setAdventure] = useState(null)
  const fetchData = () =>{
      let apiUrl = 'https://movie-site-stapi.onrender.com/api/adventures?populate=*'

      fetch(apiUrl)
      .then((response)=>{
          return response.json()
      })
      .then((dataObj)=>{
          let adventure5 = dataObj.data
          setAdventure(adventure5)
      })
  }

  useEffect(()=>{
      fetchData()
  },[])
  return (
   
    <div>
      <Header/>
      <section>
                <h2>My best top 5 movies for Adventure</h2>
                <div>
                {
                adventure !== null? (
                    adventure.map((ele, index)=>{
                        return <Adventurecomp key={index}
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
      <Footer />
    </div>
  );
};

export default Adventure;
