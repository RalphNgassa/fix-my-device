import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            
            <ul>
               
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Reviews</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href="#" className='logoLink'>FixMyDevice</a></li>
            </ul>
        </div>
    );
};

export default Navbar;