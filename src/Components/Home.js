import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Logo from '../assets/logos/Logo.svg'
import { IoIosArrowDown } from 'react-icons/io'
import Typewriter from 'typewriter-effect'

const Home = (props) => {

  return (
    <Container fluid className='Home'>
      <Row>
        <Col>
          <Image src={Logo} fluid className='hero-logo' />
        </Col>
      </Row>

      <Row className='hero-title-row'>
        <Typewriter
          options={{
            loop: true,
            wrapperClassName: 'typewriter-title',
            cursorClassName: 'typewriter-cursor'
          }}
          onInit={typewriter => {
            typewriter.typeString('Full Stack Web Developer.<br>Music Producer. Guitarist.')
              .pauseFor(5000)
              .start()
              .deleteAll()
              // .typeString('Music Producer. Guitarist.')
              // .pauseFor(1500)
              // .deleteAll()
              // .typeString('Full Stack Web Developer.<br>Music Producer. Guitarist.')
          }}
        />
      </Row>

      <Row fluid className='arrow-down-row'>
        <IoIosArrowDown className='arrow-down' size='6vh' />
      </Row>

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