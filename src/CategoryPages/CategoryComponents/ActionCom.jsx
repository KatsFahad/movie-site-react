
import { Link } from "react-router-dom";

const Actioncomp = (props) => {
  return (
    <div className="bg-[#212846] rounded-[10px] py-[10px]">
      <div className="items-center mb-[5px]">
        <h3 className="text-center text-[red] text-[25px]">
          <span className="text-[white] p-[5px] border-white">{props.no}</span>
          {props.title}
        </h3>
      </div>

      <img src={props.image} alt="image" className="w-[300px] h-[300px]" />
      <div className="text-center mt-[1.5rem] mb-[1rem]">
        <Link
          to={props.go}
          className="text-[15px] text-[black] bg-[cyan] py-[10px] px-[20px] font-bold rounded-[8px]"
        >
          <button>Watch Trailer</button>
        </Link>
      </div>
    </div>
  );
};

export default Actioncomp;
