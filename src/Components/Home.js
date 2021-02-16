import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
// import { ReactComponent as Logo } from '../assets/Logo.svg'
import Logo from '../assets/logos/Logo.svg'
import { IoIosArrowDown } from 'react-icons/io'
import Typewriter from 'typewriter-effect'

const Home = (props) => {

  // const [currentPage, setCurrentPage] = useState(0)

  // function handlePageChange(number) {
  //   setCurrentPage(number)
  // }

  return (
    <Container fluid className='Home'>
      <Row>
        <Col>
          <Image src={Logo} fluid className='hero-logo' />
        </Col>
      </Row>

      {/* <Row className='hero-title'> */}
      <Row className='hero-title-row'>
        <Container className='hero-title-container'>
          <h1>Full Stack Web Developer.</h1>
          <h1>Music Producer. Guitarist.</h1>
        </Container>
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