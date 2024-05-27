import { Link } from "react-router-dom";
const Genreele = (props) => {
  return (
    <div>
      <div className="@412:mb-[2rem] @428:mb-[2rem] @834:mb-[2rem] mx-[2rem] @884 mb-[2rem]">
        <div>
          <img
            src={props.image}
            alt="Genre image"
            className="w-[200px] h-[200px] rounded-[10px] @412: w-[169px]"
          />
        </div>
        <div className="text-center mt-[1.5rem]">
          <Link className="text-[15px] text-[black] bg-[cyan] py-[10px] px-[20px] font-bold" id="ho" to={props.go}>
            <button>{props.title}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Genreele;
