import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Header = () => {
  let navLinks = [
    { link: "Home", to: "/" },
    { link: "Categories", to: "/categories" },
    { link: "New", to: "https://www.moviefone.com/movies/" },
    { link: "Popular", to: "https://www.imdb.com/chart/moviemeter/" },
    {
      link: "Upcoming",
      to: "/https://www.rottentomatoes.com/browse/movies_coming_soon/",
    },
    { link: "About Me", to: "/aboutme" },
  ];

  return (
    <div
      className="flex gap-[4rem] mt-[2rem] ml-[10rem] mb-[1.5rem]
      @320:flex-wrap text-center ml-[3rem] mt-[2px] 
      @360:flex-wrap text-center ml-[3rem] mt-[2px] 
      @375:flex-wrap text-center ml-[3rem] mt-[2px]
      @393:flex-wrap text-center ml-[3rem] mt-[2px] @414:flex-wrap text-center ml-[3rem] mt-[2px]
      @428:flex-wrap text-center ml-[3rem] mt-[2px]
      @768:flex-wrap text-center ml-[3rem] mt-[2px]"
      id="h-cont"
    >
      <div>
        <h1 className="text-[#5cfaff] text-[2.5rem]" id="shadow">
          My Movie <br /> Ranking Site
        </h1>
      </div>
      <div id="both">
        <nav>
          <ul
            className="flex gap-10 @320: flex-wrap @360:flex-wrap @375:flex-wrap"
            id="ul"
          >
            {navLinks.map((element, index) => {
              return (
                <Navlinks key={index} link={element.link} to={element.to} />
              );
            })}
          </ul>
        </nav>
        <div
          className="flex justify-between items-center mt-[1rem] 
          @320:flex-wrap 
          @360:flex-wrap @375:flex-wrap @393:flex-wrap @414:flex-wrap
          @428:flex-wrap"
          id="inp"
        >
          <div className="mb-[1rem]" id="ser">
            <input
              type="text"
              placeholder="search"
              className="w-60 border-cyan-50 leading-7 text-[blue]"
            />
          </div>
          <div className="@768: mr-[5rem]" id="logs">
            <Link to='/login'>
              <button>Login</button>
            </Link>
            <Link to='/signup'>
              <button>SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
