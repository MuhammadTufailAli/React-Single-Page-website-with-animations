import React from 'react';
import AppHeader from '../components/AppHeader';
import { Container, Header, Icon } from 'semantic-ui-react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Footer from '../components/Footer';

// import "../css/LandingPage.css";
function LandingPage() {
  return (
    <div className='LandingPageTopContainer'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default LandingPage;
