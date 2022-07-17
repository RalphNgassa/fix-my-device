import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            document.querySelector('.hero .navbar').classList.add('solid');
            
        } else {
            document.querySelector('.hero .navbar').classList.remove('solid');
        } 
    });
  });

const Navbar = () => {

    return (
        <div className="navbar" id='page_navbar' role="navigation">
            <ul role="list">
                <li className='parts' role="link"><HashLink to="/fix-my-device#footer" >About Us</HashLink></li>
                <li className='parts' role="link"><HashLink to="/fix-my-device#reviews">Reviews</HashLink></li>
                <li className='parts' role="link"><HashLink to="/fix-my-device#services">Services</HashLink></li>
                <li style={{ fontWeight: "bold"}} className="logo" role="link"><Link to="/fix-my-device">FixMyDevice</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;