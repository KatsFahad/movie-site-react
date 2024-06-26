import Header from "../components/Header";
import Footer from "../components/Footer";
import Horrorcomp from "./CategoryComponents/HorrorCom";
import { useState, useEffect } from "react";
const Horror = () => {
  let [horror, setHorror] = useState(null);
  const fetchData = () => {
    let apiUrl = "https://movie-site-stapi.onrender.com/api/horrors?populate=*";

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        let horror5 = dataObj.data;
        setHorror(horror5);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <section>
        <h2 className="text-center text-[khaki] text-3xl mb-[1rem] underline font-[TimesNewRoman] font-bold">My best top 5 movies for Horror</h2>
        <div className="flex mx-[1.5rem] gap-[4rem] @412:flex-wrap ml-[3rem]">
          {horror !== null ? (
            horror.map((ele, index) => {
              return (
                <Horrorcomp
                  key={index}
                  no={ele.attributes.number}
                  title={ele.attributes.title}
                  image={ele.attributes.image.data.attributes.url}
                  go={ele.attributes.go}
                />
              );
            })
          ) : (
            <p>Loading</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Horror;
