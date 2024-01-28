import React from 'react';
import '../css/Section3.css';
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import robot2 from '../assets/robot2.png';
import money from '../assets/money.png';
import Group from '../assets/Group.png';
import Tick from '../assets/ticksheld.png';
import mobile3 from '../assets/mobile3.png';

function Section3() {
  return (
    <div className='Section2TopDiv Section3TopDiv'>
      <div className='ResponsiveDiv  Section2ResponsiveDiv Section3ResponsiveDiv'>
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
      <div className='ResponsiveDiv BlueBackgroundParentDiv PeachBackgroundParentDiv'>
        <div className=' BlueBackground PeachBackground'>
          <div className='PeachBackgroundLeftDiv'>
            <div className='PeachBackgroundLeftDivInnerDiv'>
              <img className='PeachBackgroundLeftDivInnerDivImg' src={robot2} />
              <h1 className='PeachBackgroundLeftDivInnerDivHeading'>
                Elevate Reach
              </h1>
              <p className='PeachBackgroundLeftDivInnerDivParagraph'>
                Tap into thousands of potential subscribers. Marketing is on us,
                ensuring a consistent influx of crypto investors ready for a bot
                like yours.
              </p>
            </div>
          </div>
          <div className='PeachBackgroundLeftDiv'>
            <div className='PeachBackgroundLeftDivInnerDiv'>
              <img className='PeachBackgroundRightDivInnerDivImg' src={money} />
              <h1 className='PeachBackgroundLeftDivInnerDivHeading'>
                Consistent Returns
              </h1>
              <p className='PeachBackgroundLeftDivInnerDivParagraph'>
                With subscriptions, experience steady and predictable earnings
                compared to the uncertainties and fluctuations inherent in
                trading.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='ResponsiveDiv BlackBackgroundParentDiv'>
        <div className=' BlackBackground'>
          <div className='BlueBackgroundRightDiv  Section3TopDivBlackRightDiv'>
            <div className='Section3TopDivBlackRightDivFirstDiv'>
              <img src={Tick} />
            </div>
            <div className='BlackBackgroundLeftDiv BlackBackgroundLeftDivTabShow'>
              <img
                className='BlackBackgroundLeftDivImg BlackBackgroundLeftDivImgExtra'
                src={Group}
              />
            </div>
            <div className='Section3TopDivBlackRightDivSecondDiv'>
              <p className='BlueBackgroundRightDivTopText'>Tick of Approval</p>
              <p className='PeachBackgroundLeftDivInnerDivParagraph PeachBackgroundLeftDivInnerDivParagraphWhite'>
                With subscriptions, experience steady and predictable earnings
                compared to the uncertainties and fluctuations inherent in
                trading.
              </p>
            </div>
          </div>
          <div className='BlackBackgroundLeftDiv'>
            <img
              className='BlackBackgroundLeftDivImg BlackBackgroundLeftDivImgExtra'
              src={Group}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
