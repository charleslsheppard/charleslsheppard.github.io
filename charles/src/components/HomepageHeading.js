import PropTypes from 'prop-types'
import React from 'react';
import {
    Button,
    Container,
    Header,
    Icon
  } from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='Charles Sheppard'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
          fontFamily: 'Frank Ruhl Libre',
          color: '#192244',
        }}
      />
      <Header
        as='h2'
        content='Artist'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          fontFamily: 'Frank Ruhl Libre',
          marginTop: mobile ? '0.5em' : '1.5em',
          color: '#192244',
        }}
      />
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

  export default HomepageHeading;