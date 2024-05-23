import Header from "../components/Header";
import Banner from "../components/Banner";
import Genre from "../components/Genre";
import Mytop5 from "../components/Mytop5";
import Fightscene from "../components/Fightscene";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Genre />
      <Mytop5 />
      <Fightscene />
      <Footer />
    </div>
  );
};

export default Home;
