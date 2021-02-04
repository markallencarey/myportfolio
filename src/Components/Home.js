import React from 'react'
import { Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../assets/Logo-3.svg'
import { IoIosArrowDown } from 'react-icons/io'

const Home = (props) => {

  return (
    <Container className='Home'>
      <Logo className='hero-logo' />
      <h1>Full Stack Web Developer.</h1>
      <div className='music-hero-div'>
        <h1 className='music-hero-producer'>Music Producer.</h1>
        <h1 className='music-hero-guitarist'>Guitarist.</h1>
      </div>
      <IoIosArrowDown className='arrow-down' size='50px'/>
    </Container>
  )
}

export default Home