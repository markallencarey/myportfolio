import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import Axios_Logo from '../assets/stack-logos/axios-logo.png'
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


const Stack = (props) => {

  return (
    <Container fluid className='Stack'>
      <div className='stack-div'>
        <Image className='stack-img' src={HTML_Logo} />
        <p>HTML5</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={JS_Logo} />
        <p>JAVASCRIPT</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={CSS_Logo} />
        <p>CSS3</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Node_Logo} />
        <p>NODEJS</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Express_Logo} />
        <p>EXPRESSJS</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Sass_Logo} />
        <p>SASS</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={React_Logo} />
        <p>REACT</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Postgres_Logo} />
        <p>POSTGRES</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Git_Logo} />
        <p>GIT</p>
      </div>
      <div className='stack-div'>
        <AiFillGithub
          className='gitHub'
          size='80px'
        />
        <p>GITHUB</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Stripe_Logo} />
        <p>STRIPE</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Postman_Logo} />
        <p>POSTMAN</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Redux_Logo} />
        <p>REDUX</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Python_Logo} />
        <p>PYTHON</p>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Bootstrap_Logo} />
        <p>BOOTSTRAP</p>
      </div>
      <div className='stack-div'>
        <p><strong>OTHER:</strong></p>
        <p>AXIOS</p>
        <p>MASSIVE</p>
        <p>SPANISH</p>
      </div>
    </Container>
  )
}

export default Stack