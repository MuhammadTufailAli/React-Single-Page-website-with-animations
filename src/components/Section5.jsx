import React from 'react';
import '../css/Section5.css';

import '../css/Section2.css';
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import Plant from '../assets/plant.png';
import man from '../assets/Man.png';

import robotman from '../assets/robotman.png';
import dollar from '../assets/dollar.png';
import lastRobot from '../assets/lastRobot.png';
import lastobile from '../assets/lastmobile.png';
import PhoneChwl from '../assets/PhoneChwl.png';

function Section5() {
  return (
    <div className='Section2TopDiv Section5TopDiv'>
      <div className='ResponsiveDiv BlackBackgroundParentDiv BlackBackgroundParentDivWhite'>
        <div className=' BlackBackground'>
          <div className='BlueBackgroundRightDiv'>
            <div className='FourImagesDiv'>
              <img src={Plant} className='PlantImg ' />
              <img className='TabDollar' src={dollar} />
              <img className='TabMan' src={man} />

              <img className='TabRobot' src={robotman} />
            </div>

            <p className='BlueBackgroundRightDivTopText  BlueBackgroundRightDivTopTextBlack'>
              Elevate Your Expertise
            </p>
            <p className='BlueBackgroundRightDivTopTextBlackSubparagraph'>
              Our platform aims to bring your expertise to the forefront,
              allowing others to benefit, and in turn reward you.
            </p>
            <List>
              <ListItem>
                <ListIcon name='heart' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    Showcase your prowess
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='heart' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    Amplify your expertise
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='heart' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    Earn from your craft
                  </p>
                </ListContent>
              </ListItem>
            </List>
          </div>
          <div className='BlackBackgroundLeftDiv'>
            <img
              className='BlackBackgroundLeftDivImg BlackBackgroundLeftDivImgOne'
              src={man}
            />

            <img className=' BlackBackgroundLeftDivImgTwo' src={robotman} />
            <img className=' BlackBackgroundLeftDivImgThree' src={dollar} />
          </div>
        </div>
      </div>

      <div className='ResponsiveDiv BlackBackgroundParentDiv BlackBackgroundParentDivPurple'>
        <div className='Section5TopDivRobotParentDiv'>
          <img className='Section5TopDivRobot' src={lastRobot} />
        </div>
        <div className='Section5TopDivMobileParentDiv'>
          {' '}
          <img className='Section5TopDivMobile' src={lastobile} />
        </div>
        <div className='BlueBackgroundRightDiv BlueBackgroundRightDivPurple'>
          <p className='BlueBackgroundRightDivTopText  BlueBackgroundRightDivTopTextPurple'>
            First-mover{' '}
            <span className='BlueBackgroundRightDivTopTextPurpleSpan'>
              Advantage
            </span>
          </p>
          <p className='BlueBackgroundRightDivTopTextPurpleParagraph'>
            Get in early, list your bot, and ensure it stands out when we
            unleash our marketing force!
          </p>

          <Input action='Join Beta' placeholder='Enter Your Email' />

          <div className='PurpleBackgroundBottomDiv'>
            <p className='PurpleBackgroundBottomDivLeftText'>363</p>
            <p className='PurpleBackgroundBottomDivRightText'>
              Users <br />
              Waitlisted
            </p>
          </div>
          <img src={PhoneChwl} className='LastImagePhoneChwl' />
        </div>
      </div>
    </div>
  );
}

export default Section5;
