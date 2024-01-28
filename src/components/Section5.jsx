import React from 'react';
import '../css/Section5.css';

import '../css/Section2.css';
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import mobile1 from '../assets/mobile.png';
import mobile2 from '../assets/mobile 2.png';
import Plant from '../assets/plant.png';
import man from '../assets/Man.png';

import robotman from '../assets/robotman.png';
import dollar from '../assets/dollar.png';
import laptop from '../assets/laptop2.png';
import trading from '../assets/trading.png';

function Section5() {
  return (
    <div className='Section2TopDiv Section5TopDiv'>
      <div className='ResponsiveDiv BlackBackgroundParentDiv BlackBackgroundParentDivWhite'>
        <div className=' BlackBackground'>
          <div className='BlueBackgroundRightDiv'>
            <img src={Plant} className='PlantImg' />
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
            <img className='BlackBackgroundLeftDivImg' src={man} />

            <img className='BlackBackgroundLeftDivImg' src={robotman} />
            <img className='BlackBackgroundLeftDivImg' src={dollar} />
          </div>
        </div>
      </div>

      <div className='ResponsiveDiv BlueBackgroundParentDiv'>
        <div className=' BlueBackground'>
          <div className='BlueBackgroundLeftDiv'>
            <img className='BlueBackgroundLeftDivImg' src={mobile1} />
          </div>
          <div className='BlueBackgroundRightDiv'>
            <p className='BlueBackgroundRightDivTopText'>
              Convert
              <br />
              Your Strategy
              <br />
              Into a Bot
            </p>
            <List>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      No-code
                    </span>{' '}
                    hassle-free bot creation
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='heart' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Over 100{' '}
                    </span>{' '}
                    indicators & chart patterns
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Analyse & build
                    </span>{' '}
                    across multiple-timeframes
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Integration prioritisation.
                    </span>{' '}
                    Request your specific needs!
                  </p>
                </ListContent>
              </ListItem>
            </List>

            <p className='BlueBackgroundRightDivBottomText'>
              Want to learn more about what's in it for you if you publish your
              system?
              <br />
              Check out{' '}
              <a className='BlueBackgroundRightDivBottomText BlueBackgroundRightDivBottomTextaTag'>
                this
              </a>{' '}
              article in our Blog section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
