import React, { useState, useEffect, useRef } from 'react';
import AppHeader from './AppHeader';
import '../css/Section1.css';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import laptopFull from '../assets/laptopFull.png';
import LaptopImage from '../assets/LaptopImage.png';
import robot from '../assets/robot.png';
import woman from '../assets/woman.png';
import chat from '../assets/chat.png';

function Section1() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollPositionRef = useRef(0);
  var setIndex = 1;

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    prevScrollPositionRef.current = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    const section1Element = document.querySelector(`.Section${setIndex}TopDiv`);

    if (section1Element) {
      section1Element.style.backgroundColor = backgroundColor;
    }
  }, [scrollPosition]);

  // Determine which section is currently in the center of the page
  const sectionHeight = window.innerHeight;
  const heightTosub = sectionHeight / 1;

  const section1Height =
    document.getElementsByClassName('Section1TopDiv')[0]?.offsetHeight || 0;
  const section2Height =
    document.getElementsByClassName('Section2TopDiv')[0]?.offsetHeight || 0;
  const section3Height =
    document.getElementsByClassName('Section3TopDiv')[0]?.offsetHeight || 0;
  const section4Height =
    document.getElementsByClassName('Section4TopDiv')[0]?.offsetHeight || 0;
  const section5Height =
    document.getElementsByClassName('Section5TopDiv')[0]?.offsetHeight || 0;

  const section1Top = section1Height - heightTosub - 30;
  const section2Top = section1Top + section2Height - 30;
  const section3Top = section2Top + section3Height - 30;
  const section4Top = section3Top + section4Height - 30;
  const section5Top = section4Top + section5Height - 30;

  let backgroundColor = 'black';

  if (scrollPosition >= section1Top && scrollPosition < section2Top) {
    if (prevScrollPositionRef?.current < scrollPosition) {
      setIndex = 1;
    } else {
      setIndex = 2;
    }

    backgroundColor = '#bfe8ff'; // Adjust the colors as needed
    // backgroundColor = '#bfe8ff';
  } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
    if (prevScrollPositionRef?.current < scrollPosition) {
      setIndex = 2;
    } else {
      setIndex = 3;
    }
    backgroundColor = '#ffd5c4';
  } else if (scrollPosition >= section3Top && scrollPosition < section4Top) {
    if (prevScrollPositionRef?.current < scrollPosition) {
      setIndex = 3;
    } else {
      setIndex = 4;
    }

    backgroundColor = '#c9fff7';
  } else if (scrollPosition >= section4Top && scrollPosition < section5Top) {
    if (prevScrollPositionRef?.current < scrollPosition) {
      setIndex = 4;
    } else {
      setIndex = 5;
    }
    backgroundColor = '#000';
  } else if (scrollPosition >= section5Top) {
    // Change the color for section 5
  }
  return (
    <div className='Section1TopDiv'>
      <div className='Section1TopDivRobotParentDiv'>
        <img className='Section1TopDivRobot' src={robot} />
      </div>
      <div className='Section1TopDivWomanParentDiv'>
        {' '}
        <img className='Section1TopDivWoman' src={woman} />
      </div>

      <div className='Section1TopDivChatParentDiv'>
        <img className='Section1TopDivChat' src={chat} />
      </div>

      <AppHeader />
      <div className='ResponsiveDiv'>
        <h1 className='ParagrapghRalway Section1TopDivHeading'>
          Build Your Crypto Bot & Market It At Scale
        </h1>
        <p className='ParagraphLato Section1TopDivSubHeading'>
          The no-code builder that supports complex strategies. Build, test,
          automate and share with the community.
        </p>

        <Button className='Section1TopDivJoinUsButton'>Join Us</Button>
        <p className='ParagrapghRalway Section1TopDivAfterJoinUs'>
          Create a bot and tap into the{' '}
          <span className='Section1TopDivAfterJoinUs950'>950</span> wait-listed
          users who eager to{' '}
          <span className='Section1TopDivAfterJoinUsCopy'>
            copy your trading bot
          </span>
        </p>
      </div>

      <div className='PurpleBackgroundParentDiv'>
        <div className='ResponsiveDiv PurpleBackground'>
          <div className='PurpleBackgroundLeftDiv'>
            <p className='PurpleBackgroundLeftDivTopText'>
              Taking <br />
              <span className='PurpleBackgroundLeftDivTopTextSpan'>
                100 Beta Testers
              </span>
            </p>
            <p className='PurpleBackgroundLeftDivTopSubText'>
              Register For Exclusive Trader Perks!
            </p>

            <Input action='Join Beta' placeholder='Enter Your Email' />

            <div className='PurpleBackgroundBottomDiv'>
              <p className='PurpleBackgroundBottomDivLeftText'>363</p>
              <p className='PurpleBackgroundBottomDivRightText'>
                Users <br />
                Waitlisted
              </p>
            </div>
          </div>
          <div className='PurpleBackgroundRightDiv'></div>
          <div className='PurpleBackgroundParentDivLaptopImageParentDiv TabScreenShow'>
            <img
              className='PurpleBackgroundParentDivLaptopImage'
              src={laptopFull}
            />
          </div>
        </div>
        <div className='PurpleBackgroundParentDivLaptopImageParentDiv LaptopScreenShow'>
          <img
            className='PurpleBackgroundParentDivLaptopImage '
            src={LaptopImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
