import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { IoChatboxOutline } from 'react-icons/io5';
import { IoTimerOutline, IoLocationOutline } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/SocialMedia';

const SocialMedia = () => {
  return (
    <Wrapper>
      <div className="social-container">
        <div className="info">
          <IoChatboxOutline className="icon" size={42} />
          <h3>Get In Touch</h3>
          <p>Phone: +34 999 12 34 56</p>
          <p>Email: contact@cocktailglow</p>
          <a
            href="https://www.youtube.com/c/jamesqquick"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="http://www.instagram.com/larnbuildteach"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://wwww.twitter.com" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <div className="info">
          <IoTimerOutline className="icon" size={42} />
          <h3>Opening Hours</h3>

          <p>Mon to Thu: 6pm-12pm</p>
          <p>Fri to Sun: 6pm-2am</p>
        </div>
        <div className="info">
          <IoLocationOutline className="icon" size={42} />
          <h3>Location</h3>

          <p>123 Main Street,</p>

          <p>Camden Town, London</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default SocialMedia;
