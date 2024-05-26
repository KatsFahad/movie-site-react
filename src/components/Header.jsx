import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Header = () => {

    let navLinks = [
        {link: 'Home', to: '/'},
        {link: 'Categories', to: '/categories' },
        {link:  'New', to: 'https://www.moviefone.com/movies/'},
        {link: 'Popular', to: 'https://www.imdb.com/chart/moviemeter/'},
        {link: 'Upcoming', to: '/https://www.rottentomatoes.com/browse/movies_coming_soon/'},
        {link: 'About Me', to: '/aboutme'}
    ]


    return ( 
            <div className="flex gap-[4rem] mt-[2rem] ml-[10rem] items-center mb-[1.5rem] @412:flex-col mx-auto ml-[2rem] mt-[5px]">
                <h1 className="text-[#5cfaff] text-[2.5rem]" id="shadow">My Movie <br /> Ranking Site</h1>
                <div>
                    <nav>
                        <ul className="flex gap-10 @412:flex-col grid grid-cols-3" id="ul">
                            {
                                navLinks.map((element, index)=>{
                                    return <Navlinks key={index} link={element.link} to={element.to}/>
                                })
                            }
                        </ul>
                    </nav>
                    <div className="flex justify-between items-center mt-[1rem] @412:flex-wrap mx-auto ml-[3rem]">
                        <div><input type="text" placeholder="search" className="w-60 border-cyan-50 leading-7 text-[blue] @412:text-center mb-[1rem]"/></div>
                        <div className="logs">
                            <Link><button>Login</button></Link>
                            <Link><button>SignUp</button></Link>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Header;