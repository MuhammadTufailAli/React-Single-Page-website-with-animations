import React, { useState, useEffect } from 'react';
import {
  Container,
  Menu,
  Image,
  Icon,
  Button,
  Modal,
  Header,
} from 'semantic-ui-react';
import logoImage from '../assets/logo1.png'; // Import your logo image
import toggle from '../assets/toggle.png'; // Import your logo image
import cross from '../assets/cross1.png';
import '../css/AppHeader.css';

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1146);
      if (!isMobile && modalOpen) {
        setModalOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, modalOpen]);

  return (
    <div>
      <Menu
        // fixed='top'
        inverted
        stackable
        borderless
        style={{
          justifyContent: 'center',
          marginTop: '-136px',
          alignSelf: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Container
          className='AppHeaderTopContainer'
          style={{
            width: '95%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#353535',
            height: '96px',
            borderRadius: 60,
            marginTop: 40,
          }}
        >
          <Menu.Item
            header
            style={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 32,
            }}
          >
            <Image
              style={{
                width: 64,

                paddingRight: 20,
              }}
              src={logoImage}
              size='tiny'
            />
          </Menu.Item>
          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Creators
          </Menu.Item>
          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Copiers
          </Menu.Item>
          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Live Chart
          </Menu.Item>
          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Marketplace
          </Menu.Item>

          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Pricing
          </Menu.Item>
          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Content Hub
          </Menu.Item>

          <Menu.Item
            as='a'
            style={{ color: 'white', marginRight: 20 }}
            className={isMobile ? 'menu-toggle' : ''}
          >
            Documentation
          </Menu.Item>

          {isMobile ? (
            <Button
              style={{
                backgroundColor: 'black',
                width: 100,
                height: 35,
                borderRadius: 20,
                color: 'white',
                borderWidth: 1,
                display: 'flex',
                marginLeft: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              icon
              onClick={toggleModal}
            >
              <Image
                src={toggle}
                style={{ width: 30, height: 20 }}
                size='mini'
              />
            </Button>
          ) : (
            <Button
              primary
              style={{
                backgroundColor: 'black',
                width: 100,
                height: 35,
                borderRadius: 20,
                color: 'white',
                borderWidth: 1,
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 30,
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              Login
            </Button>
          )}
        </Container>
      </Menu>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        style={{
          backgroundColor: '#353535',
          textAlign: 'center',
          width: '80%',
          borderRadius: 30,
          marginBottom: 5,
          marginTop: 5,
          alignSelf: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',

          padding: 30,
        }}
      >
        <Button
          style={{
            backgroundColor: 'black',
            width: 40,
            height: 40,
            borderRadius: 20,

            borderWidth: 1,
            display: 'flex',
            marginLeft: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          icon
          onClick={toggleModal}
        >
          <Image
            src={cross}
            style={{ width: 15, height: 15, marginTop: 0 }}
            size='mini'
          />
        </Button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Creators
          </Menu.Item>
          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Copiers
          </Menu.Item>
          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Live Chart
          </Menu.Item>
          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Marketplace
          </Menu.Item>
          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Pricing
          </Menu.Item>
          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Content Hub
          </Menu.Item>

          <Menu.Item style={{ marginTop: 30, color: 'white' }} as='a'>
            Documentation
          </Menu.Item>
        </div>
        <div
          style={{
            width: '90%',
            // borderWidth: 1,
            // borderStyle: 'double',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            marginTop: 25,
          }}
        ></div>

        <div
          className='LoginModelButton'
          // style={{
          //   width: '90%',
          //   borderWidth: 1,
          //   borderStyle: 'double',
          //   color: 'white',
          //   display: 'flex',
          //   alignItems: 'center',
          //   marginTop: 20,
          // }}
        >
          <Menu.Item style={{ marginTop: 20, color: 'white' }} as='a'>
            Login
          </Menu.Item>
        </div>
        <Button
          style={{ marginTop: 40 }}
          className='Section1TopDivJoinUsButton'
        >
          Join Us
        </Button>
      </Modal>
    </div>
  );
}

export default NavBar;
