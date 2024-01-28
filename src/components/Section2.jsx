import React from 'react';
import '../css/Section2.css';
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

import mobile1 from '../assets/mobile.png';
import mobile2 from '../assets/mobile 2.png';
import mobile3 from '../assets/mobile3.png';
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

      <div className='ResponsiveDiv BlackBackgroundParentDiv'>
        <div className=' BlackBackground'>
          <div className='BlueBackgroundRightDiv'>
            <p className='BlueBackgroundRightDivTopText'>
              Rent
              <br />
              and Earn
            </p>
            <List>
              <ListItem>
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Determine
                    </span>{' '}
                    the flat fee + earn 0.1% of the users capital
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Reach
                    </span>
                    subscribers at launch with early access
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Frictionless
                    </span>{' '}
                    for subscribers. Subscribe - Allocated - Automate
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' />
                <ListContent>
                  <p className='BlueBackgroundRightDivListText'>
                    <span className='BlueBackgroundRightDivListTextSpan'>
                      Protection
                    </span>{' '}
                    of your strategy through encryption
                  </p>
                </ListContent>
              </ListItem>
            </List>
          </div>
          <div className='BlackBackgroundLeftDiv'>
            <img className='BlackBackgroundLeftDivImg' src={mobile2} />
          </div>
        </div>
      </div>

      <div className='ResponsiveDiv WhiteBackgroundParentDiv'>
        <div className=' WhiteBackground'>
          <div className='BlueBackgroundLeftDiv'>
            <img className='BlueBackgroundLeftDivImg' src={mobile3} />
          </div>
          <div className='BlueBackgroundRightDiv'>
            <p className='WhiteBackgroundRightDivTopText'>
              Your Trading
              <br />
              Cockpit
            </p>
            <p className='WhiteBackgroundExtraText'>
              All-in-one crypto trading.
            </p>
            <List>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='WhiteBackgroundRightDivListTextSpan'>
                      Connect
                    </span>{' '}
                    your exchange for full trading features
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='WhiteBackgroundRightDivListTextSpan'>
                      Trade
                    </span>{' '}
                    however you'd like. Automation or manually with alerts
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='WhiteBackgroundRightDivListTextSpan'>
                      Portfolio
                    </span>{' '}
                    aggregation for your exchanges and crypto wallets
                  </p>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='WhiteBackgroundRightDivListTextSpan'>
                      Non-custodial
                    </span>{' '}
                    so your funds remain on your exchanges
                  </p>
                </ListContent>
              </ListItem>

              <ListItem>
                <ListIcon name='check' color='black' />
                <ListContent>
                  <p className='WhiteBackgroundRightDivListText'>
                    <span className='WhiteBackgroundRightDivListTextSpan'>
                      Affiliate
                    </span>{' '}
                    Program to share with your network and earn
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
