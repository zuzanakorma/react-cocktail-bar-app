import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1 data-aos="fade-down">Welcome</h1>
      <p className="text" data-aos="fade-down">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
        ut.
      </p>
      <div className="btn-landing">
        <Link to="/booking" className="btn btn-front">
          Book Now
        </Link>
        <Link to="/about" className="btn btn-front">
          Find Us
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
