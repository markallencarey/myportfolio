import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../assets/Logo-3.svg'
import { IoIosArrowDown } from 'react-icons/io'
import Stack from './Stack'
// import Typewriter from 'typewriter-effect'

const Home = (props) => {

  return (
    <Container className='Home'>
      <div className="hero">
        <Logo className='hero-logo' />
        <div className='hero-title'>
          <h1>Full Stack Web Developer.</h1>
          <div className='music-hero-div'>
            <h1 className='music-hero-producer'>Music Producer.</h1>
            <h1 className='music-hero-guitarist'>Guitarist.</h1>
          </div>
        </div>
      </div>
      <Stack />
      <IoIosArrowDown className='arrow-down' size='50px' />
    </Container>
  )
}

export default Home

{/* <div>
<Typewriter
  options={{
    // loop: true,
    wrapperClassName: 'typewriter-title',
    cursorClassName: 'typewriter-cursor'
  }}
  onInit={typewriter => {
    typewriter.typeString('Full Stack Web Developer.')
      .pauseFor(11000)
      .start()
  }}
/>
<Typewriter
  options={{
    // loop: true,
    wrapperClassName: 'typewriter-title',
    cursorClassName: 'typewriter-cursor'
  }}
  onInit={typewriter => {
    typewriter.pauseFor(4000)
      .typeString('Music Producer. Guitarist.')
      .pauseFor(5000)
      .start()
  }}
/>
</div> */}