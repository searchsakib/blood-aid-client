import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
  return (
    <div className="pb-[100px] overflow-x-hidden">
      <Helmet>
        <title>Blood Aid | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="pb-[100px] pt-[100px]">
        <Services></Services>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
