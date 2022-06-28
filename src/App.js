import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import Footer from './Footer';
import Button from './Button';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className='App'>
      
      <Hero/>
      <Services/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
