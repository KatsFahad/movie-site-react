import { Link } from "react-router-dom";
const Genreele = (props) => {
  return (
    <div>
      <div>
      <div>
        <img src={props.image} alt="Genre image" className="w-[200px] h-[200px]" />
      </div>
      <div className="text-center">
        <Link to={props.link}>
          <button>{props.title}</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Genreele;
