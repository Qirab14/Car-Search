// import components
import Cars from '../components/Cars';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Driving from '../components/Driving';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Cars />
      <Services />
      <Driving />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
