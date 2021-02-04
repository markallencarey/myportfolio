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


const Stack = (props) => {

  return (
    <Container className='Stack'>
      <div className='stack-div'>
        <Image className='stack-img' src={HTML_Logo} />
        <h6>HTML5</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={JS_Logo} />
        <h6>JAVASCRIPT</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={CSS_Logo} />
        <h6>CSS3</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Node_Logo} />
        <h6>NODEJS</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Express_Logo} />
        <h6>EXPRESS</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Sass_Logo} />
        <h6>SASS</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={React_Logo} />
        <h6>REACT</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Postgres_Logo} />
        <h6>POSTGRES</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Git_Logo} />
        <h6>GIT</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={GitHub_Logo} />
        <h6>GITHUB</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Stripe_Logo} />
        <h6>STRIPE</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Postman_Logo} />
        <h6>POSTMAN</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Redux_Logo} />
        <h6>REDUX</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Python_Logo} />
        <h6>PYTHON</h6>
      </div>
      <div className='stack-div'>
        <Image className='stack-img' src={Bootstrap_Logo} />
        <h6>BOOTSTRAP</h6>
      </div>
      <div className='stack-div'>
        <h6>OTHER:</h6>
        <p>AXIOS</p>
        <p>MASSIVE</p>
        <p>SPANISH</p>
      </div>
    </Container>
  )
}

export default Stack