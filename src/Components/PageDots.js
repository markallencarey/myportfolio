import React from 'react'
import { BsDot } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Container } from 'react-bootstrap'

const PageDots = (props) => {

  return (
    <Container className='PageDots'>
      <BsDot />
      <BsDot />
      <BsDot />
      <BsDot />
      <BsDot />
    </Container>
  )
}

export default PageDots