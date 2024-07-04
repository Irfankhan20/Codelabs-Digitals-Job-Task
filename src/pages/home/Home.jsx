import Banner from "./banner/Banner";
import DiscountSection from "./discountSection/DiscountSection";
import Faq from "./faq/Faq";
import OurServices from "./ourServices/OurServices";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import WhoWeAre from "./whoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <WhoWeAre></WhoWeAre>
      <Services></Services>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <DiscountSection></DiscountSection>
    </div>
  );
};

export default Home;
