import React from 'react';
import '../css/Footer.css';

import FooterIcon from '../assets/FooterIcon.png';
import FB from '../assets/fb.png';
import Ln from '../assets/ln.png';
import Twitter from '../assets/twitter.png';

function Footer() {
  return (
    <div className='FooterTopDiv'>
      <div className='FooterFirstDiv TabFooterFirstDiv'>
        <img src={FooterIcon} className='FooterImage' />
        <p className='FooterParagraph'>
          Trade Effortlessly
          <br />
          Simplify Life
        </p>
      </div>
      <div className='ResponsiveDiv FooterTopDivFlex'>
        <div className='FooterFirstDiv LaptopFooterFirstDiv'>
          <img src={FooterIcon} className='FooterImage' />
          <p className='FooterParagraph'>
            Trade Effortlessly
            <br />
            Simplify Life
          </p>
        </div>
        <div className='FooterSecondDiv'>
          <a href='' className='FooterAtag'>
            About Us
          </a>
          <a href='' className='FooterAtag'>
            Blog
          </a>
          <a href='' className='FooterAtag'>
            FAQ
          </a>
          <a href='' className='FooterAtag'>
            Media Kit
          </a>
        </div>
        <div className='FooterThirdDiv'>
          <a href='' className='FooterAtag'>
            Media Kit
          </a>
          <a href='' className='FooterAtag'>
            T&Cs
          </a>
          <a href='' className='FooterAtag'>
            Privacy Policy
          </a>
          <a href='' className='FooterAtag'>
            Disclaimer
          </a>
        </div>
        <div className='FooterFourthDiv'>
          <a href='' className='FooterAtag'>
            <img src={FB} />
          </a>
          <a href='' className='FooterAtag'>
            <img src={Twitter} />
          </a>
          <a href='' className='FooterAtag'>
            <img src={Ln} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
