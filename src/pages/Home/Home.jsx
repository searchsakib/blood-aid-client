import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import ContactUs from '../../components/ContactUs/ContactUs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  // for aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="pb-[100px] overflow-x-hidden">
      <Helmet>
        <title>Blood Aid | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="pb-[100px] pt-[100px]" data-aos="fade-right">
        <Services></Services>
      </div>
      <div data-aos="fade-left">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
