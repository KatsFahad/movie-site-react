import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Header = () => {

    let navLinks = [
        {link: 'Home', to: '/'},
        {link: 'Categories', to: '/categories' },
        {link:  'New', to: '/new'},
        {link: 'Popular', to: '/popular'},
        {link: 'Upcoming', to: '/upcoming'},
        {link: 'About Me', to: '/aboutme'}
    ]


    return ( 
            <div className="flex gap-[4rem] mt-[2rem] ml-[12%] items-center">
                <h1 className="text-[#5cfaff] text-[2.5rem]" id="shadow">My Movie <br /> Ranking Site</h1>
                <div>
                    <nav>
                        <ul className="flex gap-10 text-[#5cfaff] text-[25px]" id="ul">
                            {
                                navLinks.map((element, index)=>{
                                    return <Navlinks key={index} link={element.link} to={element.to}/>
                                })
                            }
                        </ul>
                    </nav>
                    <div className="flex justify-between items-center mt-[1rem]">
                        <div><input type="text" placeholder="search" className="w-60 border-cyan-50 leading-7 text-[blue]"/></div>
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