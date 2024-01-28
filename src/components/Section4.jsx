import React from 'react';

import '../css/Section4.css';

import robot2 from '../assets/robot3.png';
import woman from '../assets/woman2.png';
import laptop from '../assets/laptop2.png';
import trading from '../assets/trading.png';

function Section4() {
  return (
    <div className='Section2TopDiv Section4TopDiv'>
      <div className='ResponsiveDiv  Section2ResponsiveDiv Section4ResponsiveDiv'>
        <div className='Section2ResponsiveHeadingDiv'>
          <h1 className='ParagrapghRalway Section2TopDivHeading Section3TopDivHeading'>
            The Publisher
            <br />
            <span className='Section2TopDivHeadingSpan Section3TopDivHeadingSpan'>
              Edge
            </span>
          </h1>
        </div>
      </div>
      <div className='ResponsiveDiv BlueBackgroundParentDiv SkyBlueBackgroundParentDiv'>
        <div className=' BlueBackground SkyBlueBackground'>
          <div className='PeachBackgroundLeftDiv'>
            <div className='PeachBackgroundLeftDivInnerDiv PeachBackgroundLeftDivInnerDivGreenColor'>
              <img
                className='PeachBackgroundLeftDivInnerDivImg  PeachBackgroundLeftDivInnerDivImgWoman'
                src={woman}
              />
              <h1 className='PeachBackgroundLeftDivInnerDivHeading PeachBackgroundLeftDivInnerDivHeadingWhite'>
                Beginner Friendly Automation
              </h1>
              <p className='PeachBackgroundLeftDivInnerDivParagraph PeachBackgroundLeftDivInnerDivParagraphWhite'>
                Crafted for beginners, perfected for experts. With Tradable,
                even crypto newbies can effortlessly subscribe and start
                automating!
              </p>
            </div>
          </div>
          <div className='PeachBackgroundLeftDiv'>
            <div className='PeachBackgroundLeftDivInnerDiv PeachBackgroundLeftDivInnerDivBlackColor'>
              <img
                className='PeachBackgroundLeftDivInnerDivImg PeachBackgroundLeftDivInnerDivImgRobot'
                src={robot2}
              />
              <h1 className='PeachBackgroundLeftDivInnerDivHeading PeachBackgroundLeftDivInnerDivHeadingWhite'>
                Superior Bot Builder
              </h1>
              <p className='PeachBackgroundLeftDivInnerDivParagraph PeachBackgroundLeftDivInnerDivParagraphWhite'>
                No-code builder surpasses simple DCA or GRID options. Craft
                sophisticated bots, turning strategies into actionable,
                automated systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='ResponsiveDiv BlueBackgroundParentDiv SkyBlueBackgroundParentDiv2'>
        <div className=' BlueBackground SkyBlueBackground'>
          <div className='PeachBackgroundLeftDiv'>
            <div className='PeachBackgroundLeftDivInnerDiv PeachBackgroundLeftDivInnerDivWhiteColor'>
              <img
                className='PeachBackgroundLeftDivInnerDivImg PeachBackgroundLeftDivInnerDivImgLaptop'
                src={laptop}
              />
              <h1 className='PeachBackgroundLeftDivInnerDivHeading PeachBackgroundLeftDivInnerDivHeadingBlack'>
                Precision Tools
              </h1>
              <p className='PeachBackgroundLeftDivInnerDivParagraph '>
                Crafted for beginners, perfected for experts. With Tradable,
                even crypto newbies can effortlessly subscribe and start
                automating!
              </p>
            </div>
          </div>
          <div className='PeachBackgroundLeftDiv '>
            <div className='PeachBackgroundLeftDivInnerDiv PeachBackgroundLeftDivInnerDivGreenColor'>
              <img
                className='PeachBackgroundLeftDivInnerDivImg PeachBackgroundLeftDivInnerDivImgTrading'
                src={trading}
              />
              <h1 className='PeachBackgroundLeftDivInnerDivHeading PeachBackgroundLeftDivInnerDivHeadingWhite'>
                All-in-one Trading
              </h1>
              <p className='PeachBackgroundLeftDivInnerDivParagraph PeachBackgroundLeftDivInnerDivParagraphWhite'>
                A true all-rounder: from backtesting to automation, manual
                trading, and portfolio aggregation. Tailored to cater to both
                automated enthusiasts and manual traders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
