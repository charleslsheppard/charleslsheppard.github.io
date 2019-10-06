import PropTypes from 'prop-types'
import React from 'react';
import MobileContainer from './MobileContainer';
import DesktopContainer from './DesktopContainer';
import Tabs from './Tabs';
import { Element } from 'react-scroll';

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <br/>
    <Element name="About">
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Who am I?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
              Jean Valjean... oh no Charles Sheppard. I am an artist born in 1951 in Paris, France where I attended the École Nationale Supérieure des Beaux-arts. I work primarily in acrylic and pastel.</p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Besides painting
              </Header>
              <p style={{ fontSize: '1.33em' }}>
              My great passions are: my family and rugby. If not painting, you may find me wandering the streets pondering the great questions of life; Please approach cautiously and gently point me in the direction of the 99th and Winchester.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='../../images/other/charles.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Element>
    <Element name="Gallery">
    <Container text>
      <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em 3em 0em', textTransform: 'uppercase' }}
      >
        <a>Gallery</a>
      </Divider>
    </Container>
      <Segment style={{ padding: '0em 5em' }} vertical>
        <Grid columns='equal'>
          <Grid.Row centered >
            <Tabs/>
          </Grid.Row>
        </Grid>
      </Segment>
    </Element>
    <Element name="Commission">
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
        <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '1em 0em 3em 0em', textTransform: 'uppercase' }}
            >
              <a>Commision a Painting</a>
        </Divider>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row textAlign='center'>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>
                  Step 1. <br/>Share Your Vision
                </Header>
                <p style={{ fontSize: '1.00em' }}>
                  Contact Charles at clcssheppard@yahoo.com and describe your vision.
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>
                  Step 2. <br/>Collaborate
                </Header>
                <p style={{ fontSize: '1.00em' }}>
                  Meet with Charles to discuss the details of the piece.
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>
                  Step 3. <br/>Creation
                </Header>
                <p style={{ fontSize: '1.00em' }}>
                  Work begins on your piece and will typically take 6 to 8 weeks to complete.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Element>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>

      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contact' />
              <List link inverted>
                <List.Item as='a'>clcssheppard@yahoo.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Need a site?
              </Header>
              <p>
                contact colinsheppard10@gmail.com
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
