import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import Bootstrap_Logo from '../assets/stack-logos/bootstrap-5-1.svg'
import CSS_Logo from '../assets/stack-logos/css-5.svg'
import Express_Logo from '../assets/stack-logos/express-109.svg'
import Git_Logo from '../assets/stack-logos/git-icon.svg'
import GitHub_Logo from '../assets/stack-logos/github-icon-1.svg'
import HTML_Logo from '../assets/stack-logos/html5.svg'
import JS_Logo from '../assets/stack-logos/javascript.svg'
import Node_Logo from '../assets/stack-logos/node-js-logo.svg'
import Postgres_Logo from '../assets/stack-logos/postgresql.svg'
import Postman_Logo from '../assets/stack-logos/postman-logo-stacked.svg'
import Python_Logo from '../assets/stack-logos/python-5.svg'
import React_Logo from '../assets/stack-logos/react-2.svg'
import Redux_Logo from '../assets/stack-logos/redux.svg'
import Sass_Logo from '../assets/stack-logos/sass-1.svg'
import Stripe_Logo from '../assets/stack-logos/stripe-4.svg'
import { AiFillGithub } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import Div100vh from 'react-div-100vh'

const Stack = (props) => {

  return (
    <Container fluid className='Stack'>
      <Row className='stack-list'>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={HTML_Logo} />
          <p className='stack-title'>HTML5</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={JS_Logo} />
          <p className='stack-title'>JAVASCRIPT</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={CSS_Logo} />
          <p className='stack-title'>CSS3</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Node_Logo} />
          <p className='stack-title'>NODEJS</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Express_Logo} />
          <p className='stack-title'>EXPRESSJS</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Sass_Logo} />
          <p className='stack-title'>SASS</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={React_Logo} />
          <p className='stack-title'>REACT</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Postgres_Logo} />
          <p className='stack-title'>POSTGRES</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Git_Logo} />
          <p className='stack-title'>GIT</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <AiFillGithub
            className='stack-img'
            size='80px'
          />
          <p className='stack-title'>GITHUB</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Stripe_Logo} />
          <p className='stack-title'>STRIPE</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Postman_Logo} />
          <p className='stack-title'>POSTMAN</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Redux_Logo} />
          <p className='stack-title'>REDUX</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Python_Logo} />
          <p className='stack-title'>PYTHON</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <Image className='stack-img' src={Bootstrap_Logo} />
          <p className='stack-title'>BOOTSTRAP</p>
        </Container>
        <Container
          className='stack-Container'
        >
          <p className='stack-title'><strong>OTHER:</strong></p>
          <p className='stack-title'>AXIOS</p>
          <p className='stack-title'>MASSIVE</p>
          <p className='stack-title'>SPANISH</p>
        </Container>
      </Row>
    </Container>
  )
}

export default Stack