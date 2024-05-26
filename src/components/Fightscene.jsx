import { useState, useEffect } from "react";
import Fightsceneele from "./Fightsceneele";

const Fightscene = () => {
  let [imge, setImge] = useState(null);

  const fetchData = () => {
    let apiUrl = "";
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        let imageData = dataObj.data;
        setImge(imageData);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-center text-[khaki] text-3xl mb-[1rem] underline font-[TimesNewRoman] font-bold">Fight scenes</h2>
      <p className="text-white font-[Satisfy] text-4xl ml-[1.5rem]">Click on the images below to see one of the best fight scenes</p>
      <div id="imgs-b" className="flex mx-[1.5rem]">
        <a href="https://www.youtube.com/watch?v=X7mzHk-FhCA" target="_blank">
          <img className="" src="src/images/img-3.webp" alt="img" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=zWTbLZCR84k&t=114s"
          target="_blank"
        >
          <img className="w-[%]" src="src/images/synder2.jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=kjiSVunIWpU" target="_blank">
          <img className="w-[120rem]" src="src/images/img-1.webp" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=VOdkIo2Cark" target="_blank">
          <img className="w-[%]" src="src/images/img-2.webp" alt="img" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=6KuydZL-4HE&t=5s"
          target="_blank"
        >
          <img className="w-[%]" src="src/images/img-5.webp" alt="img" />
        </a>
      </div>
    </div>
  );
};

export default Fightscene;
