import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Logo from '../assets/logos/Logo.svg'
import { IoIosArrowDown } from 'react-icons/io'
import Typewriter from 'typewriter-effect'
import Div100vh from 'react-div-100vh'

const Home = (props) => {

  return (
    // <Div100vh>
      <Container fluid className='Home'>
        <Row >
          <Col sm={12} className='hero-logo-col'>
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
            }}
          />
        </Row>
        {/* <Row fluid className='arrow-down-row'>
          <IoIosArrowDown className='arrow-down' size='6vh' color='#fffafa' />
        </Row> */}
      </Container>
    // </Div100vh>
  )
}

export default Home