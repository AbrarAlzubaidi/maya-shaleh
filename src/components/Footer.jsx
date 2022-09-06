import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../assets/css/Footer.css";
import logo from "/images/logo.png"

export default function Footer(){
    return(
        <footer id="footer">
            <div className="footer-logo">
                <a href="#"><img src={logo}/></a>
                <div className="social">
                    <a href="https://www.messenger.com/"><FontAwesomeIcon icon={faFacebookMessenger}/></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
            <div className="contact">
                <u><h3>Contact Us</h3></u>
                <p>phone: +962789155348</p>
                <p>email: info.mg.com</p>
            </div>
            <div className="offer">
                <u><h3>what we have</h3></u>
                <a href="#about"><p> <FontAwesomeIcon icon={faArrowRight} className="icon"/> About</p></a>
                <a href="#palette"><p> <FontAwesomeIcon icon={faArrowRight} className="icon"/> Palette</p></a>
                <a href="#features"><p> <FontAwesomeIcon icon={faArrowRight} className="icon" /> Features</p></a>
            </div>
        </footer>
    )
}