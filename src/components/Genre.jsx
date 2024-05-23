import { useState, useEffect } from "react";
import Genreele from "./Genreele";
import { Link } from "react-router-dom";
const Genre = () => {
  let [genre, setGenres] = useState(null);

  const fetchdata = () => {
    let apiUrl = "https://movie-site-stapi.onrender.com/api/genres?populate=*";
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((objectData) => {
        let genreData = objectData.data;
        setGenres(genreData);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center">Movie Categories</h2>
      </div>
      <div className="flex justify-around">
        {genre !== null ? (
          genre.map((ele, index) => {
            return (
              <Genreele
                image={`http://localhost:1337${ele.attributes.image.data.attributes.url}`}
                title={ele.attributes.title}
                key={index}
                to={ele.attributes.link}
              />
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default Genre;
