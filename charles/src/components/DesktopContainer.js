import PropTypes from 'prop-types'
import React, { Component } from 'react';
import HomepageHeading from './HomepageHeading';
import { Link }from 'react-scroll';

import {
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
  } from 'semantic-ui-react';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

class DesktopContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          activeItem: null
        }
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
    render() {
      const { children } = this.props
      const { fixed,activeItem } = this.state
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
              className="colheading"
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                className="colborder"
              >
                <Container className="colmainheader">
                    <Link to="About" spy={true} smooth={true} duration={500}>
                        <Menu.Item className="coltext" name='About' as='a' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item>
                    </Link>
                    <Link to="Gallery" spy={true} smooth={true} duration={500}>
                        <Menu.Item className="coltext" name='Gallery' as='a' active={activeItem === 'Gallery'} onClick={this.handleItemClick}>Gallery</Menu.Item>
                    </Link>
                    <Link to="Commission" spy={true} smooth={true} duration={500}>
                        <Menu.Item className="coltext" name='Commission' as='a' active={activeItem === 'Commission'} onClick={this.handleItemClick}>Commission</Menu.Item>
                    </Link>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }

  export default DesktopContainer;