import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './footers.css';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <div>
       <p className="social-container">
        <div>
        <a
          href="https://www.youtube.com/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        </div>
        <div className="footer-text">&copy; Indianfoood.com</div>
      </p>
    </div>
  );
}