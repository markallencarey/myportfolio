import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import PDF from '../assets/Resume.pdf'


const Resume = (props) => {

  return (
    <Container className='Resume'>
      Resume.js
      <iframe
        title='resume'
        style={{ width: '100%', height: '100%' }}
        src={PDF}
      />
    </Container>
  )
}

export default Resume