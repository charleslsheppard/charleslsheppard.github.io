import PropTypes from 'prop-types'
import React, { Component } from 'react';
import HomepageHeading from './HomepageHeading';
import { Link }from 'react-scroll';
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  
class MobileContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          activeItem: null
        }
    }
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })
    handleItemClick = (e, { name }) => {
        this.setState({ sidebarOpened: !this.state.sidebarOpened },
          this.setState({ activeItem: name })
        )
      }
  
    render() {
      const { children } = this.props
      const { sidebarOpened, activeItem } = this.state
  
      return (
        <Responsive
          as={Sidebar.Pushable}
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link to="About" spy={true} smooth={true} duration={500}>
              <Menu.Item name='About' as='a' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item>
            </Link>
            <Link to="Gallery" spy={true} smooth={true} duration={500}>
              <Menu.Item name='Gallery' as='a' active={activeItem === 'Gallery'} onClick={this.handleItemClick}>Gallery</Menu.Item>
            </Link>
            <Link to="Commission" spy={true} smooth={true} duration={500}>
              <Menu.Item name='Commission' as='a' active={activeItem === 'Commission'} onClick={this.handleItemClick}>Commission</Menu.Item>
            </Link>
          </Sidebar>
  
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em',background: 'url(../images/landscape/parisPontDesArtsBackground.jpg) no-repeat center center scroll', backgroundSize: 'cover',backgroundAttachment:'fixed' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
  
            {children}
          </Sidebar.Pusher>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }

  export default MobileContainer;