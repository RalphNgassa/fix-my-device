import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import Footer from './Footer';
import Button from './Button';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import BookingMain from './BookingMain';
import BookingDetails from './BookingDetails';
import BookingApt from './BookingApt';
import BookingConfirm from './BookingConfirm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/bookingmain' element={<BookingMain/>} />
          <Route path='/bookingdetails' element={<BookingDetails/>} />
          <Route path='/bookingapt' element={<BookingApt/>} />
          <Route path='/BookingConfirm' element={<BookingConfirm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
