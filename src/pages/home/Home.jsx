import Banner from "./banner/Banner";
import OurServices from "./ourServices/OurServices";
import Services from "./services/Services";
import WhoWeAre from "./whoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <WhoWeAre></WhoWeAre>
      <Services></Services>
    </div>
  );
};

export default Home;
