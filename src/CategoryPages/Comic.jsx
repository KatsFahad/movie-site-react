import Footer from "../components/Footer";
import Header from "../components/Header";
import Comiccomp from "./CategoryComponents/ComicCom";
import { useState, useEffect } from "react";

const Comic = () => {
  let [comic, setComic] = useState(null);
  const fetchData = () => {
    let apiUrl = "https://movie-site-stapi.onrender.com/api/comics?populate=*";

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        let comic5 = dataObj.data;
        setComic(comic5);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <section>
        <h2 className="text-center text-[khaki] text-3xl mb-[1rem] underline font-[TimesNewRoman] font-bold">My best top 5 movies for Comic</h2>
        <div className="flex mx-[1.5rem] gap-[4rem]">
          {comic !== null ? (
            comic.map((ele, index) => {
              return (
                <Comiccomp
                  key={index}
                  no={ele.attributes.number}
                  title={ele.attributes.title}
                  image={`http://localhost:1337${ele.attributes.image.data[0].attributes.url}`}
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

export default Comic;
