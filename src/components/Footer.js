import React from "react";
import "../css/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-intro">
        <span className="title">MY SHOP</span>
        <p className="footer-desc desc">
          There are many variations of passages of Lorem Ispum avaible , but the
          majority have suffered alteration in some form , by injected humor ,
          or randomised words which don't look even slightly believable
        </p>
        <div className="footer-intro__contact">
          <FacebookIcon className="footer__icon" fontSize="large" />
          <GitHubIcon className="footer__icon" fontSize="large" />
          <InstagramIcon className="footer__icon" fontSize="large" />
        </div>
      </div>
      <div className="footer-link">
        <span className="footer-title">Useful Links</span>
        <span className="footer-link__text">Home</span>
        <span className="footer-link__text">Man Fashion</span>
        <span className="footer-link__text">Accessories</span>
        <span className="footer-link__text">Order Tracking</span>
        <span className="footer-link__text">Cart</span>
      </div>
      <div className="footer-link">
      <span className="footer-title">Users</span>
        <span className="footer-link__text">Cart</span>
        <span className="footer-link__text">Woman Fashion</span>
        <span className="footer-link__text">My Account</span>
        <span className="footer-link__text">Wishlist</span>
        <span className="footer-link__text">Terms</span>
      </div>
      <div className="footer-contact">
          <span className="footer-title">Contact</span>
          <div className="footer-contact__content">
              <LocationOnIcon />
              <span>Hoa Vang, Da Nang city</span>
          </div>
          <div className="footer-contact__content">
              <PhoneIcon />
              <span>077xxxxx73</span>
          </div>
          <div className="footer-contact__content">
              <AlternateEmailIcon />
              <span>soonhoang14@gmail.com</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;
