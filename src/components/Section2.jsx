import React from 'react';
import '../css/Section2.css';
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import mobile1 from '../assets/mobile.png';
import robot from '../assets/robot.png';
import woman from '../assets/woman.png';
import chat from '../assets/chat.png';

function Section2() {
  return (
    <div className='Section2TopDiv'>
      <div className='ResponsiveDiv Section2ResponsiveDiv'>
        <div className='Section2ResponsiveHeadingDiv'>
          <h1 className='ParagrapghRalway Section2TopDivHeading'>
            Craft Bots,
            <br />
            <span className='Section2TopDivHeadingSpan'>Not Code</span>
          </h1>
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
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      No-code
                    </span>{' '}
                    hassle-free bot creation
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Over 100{' '}
                    </span>{' '}
                    indicators & chart patterns
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Analyse & build
                    </span>{' '}
                    across multiple-timeframes
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' />
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

export default Section2;
