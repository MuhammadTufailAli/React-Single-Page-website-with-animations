import React from 'react';
import AppHeader from './AppHeader';
import '../css/Section1.css';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import LaptopImage from '../assets/LaptopImage.png';
import robot from '../assets/robot.png';
import woman from '../assets/woman.png';
import chat from '../assets/chat.png';

function Section1() {
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

            <Input action='Search' placeholder='Enter Your Email' />

            <div className='PurpleBackgroundBottomDiv'>
              <p className='PurpleBackgroundBottomDivLeftText'>363</p>
              <p className='PurpleBackgroundBottomDivRightText'>
                Users <br />
                Waitlisted
              </p>
            </div>
          </div>
          <div className='PurpleBackgroundRightDiv'></div>
        </div>
        <div className='PurpleBackgroundParentDivLaptopImageParentDiv'>
          <img
            className='PurpleBackgroundParentDivLaptopImage'
            src={LaptopImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
