import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Reviews from './Reviews';
import Footer from './Footer';
import Button from './Button';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import BookingMain from './BookingMain';
import BookingDetails from './BookingDetails';
import BookingApt from './BookingApt';
import BookingConfirm from './BookingConfirm';
import HowTo from './HowTo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/fix-my-device' element={<Home/>} />
          <Route path='/bookingmain' element={<BookingMain/>} />
          <Route path='/bookingdetails' element={<BookingDetails/>} />
          <Route path='/bookingapt' element={<BookingApt/>} />
          <Route path='/howto' element={<HowTo/>} />
          <Route path='/BookingConfirm' element={<BookingConfirm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
