import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home" id="home">
            <Hero/>
            <Services/>
            <Reviews/>
            <Footer/>
        </div>
    );
};
 
export default Home;
