import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <h3 className="logo">
            <img
              className="img-fluid"
              src="./images/logo.png"
              width="40"
              alt=""
            />
            Cocktail Glow
          </h3>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/menu" className="nav-link">
              Menu
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            <NavLink to="/booking" className="nav-link">
              Booking
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
