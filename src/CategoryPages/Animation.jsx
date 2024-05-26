import Footer from "../components/Footer";
import Header from "../components/Header";
import Animatoncomp from "./CategoryComponents/AnimationCom";
import { useState, useEffect } from "react";

const Animation = () => {
  let [animation, setAnimation] = useState(null);
  const fetchData = () => {
    let apiUrl =
      "https://movie-site-stapi.onrender.com/api/animations?populate=*";

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        let animation5 = dataObj.data;
        setAnimation(animation5);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <section>
        <h2 className="text-center text-[khaki] text-3xl mb-[1rem] underline font-[TimesNewRoman] font-bold">
          My best top 5 movies for Animation
        </h2>
        <div className="flex mx-[1.5rem] gap-[4rem]">
          {animation !== null ? (
            animation.map((ele, index) => {
              return (
                <Animatoncomp
                  key={index}
                  no={ele.attributes.number}
                  title={ele.attributes.title}
                  image={`https://movie-site-stapi.onrender.com${ele.attributes.image.data.attributes.url}`}
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

export default Animation;
