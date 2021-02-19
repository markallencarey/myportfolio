import React, { useState } from 'react'
import { Container, Row, Image, Modal, Button } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io'
import ShowRandomizer from '../assets/projects/showRandomizer-tiny.png'
import krissbethsWorld from '../assets/projects/krissbethsWorld-tiny.png'
import covid19Dashboard from '../assets/projects/covid19Dashboard-tiny.png'

const Projects = (props) => {

  const [showShow, setShowShow] = useState(false)
  const [showKB, setShowKB] = useState(false)
  const [showCOVID, setShowCOVID] = useState(false)

  const handleCloseShow = () => setShowShow(false)
  const handleShowShow = () => setShowShow(true)

  const handleCloseKB = () => setShowKB(false)
  const handleShowKB = () => setShowKB(true)

  const handleCloseCOVID = () => setShowCOVID(false)
  const handleShowCOVID = () => setShowCOVID(true)

  return (
    <Container fluid className='Projects'>
      <Row className='project-list'>
        <Container className='project'>
          <Image
            fluid
            rounded
            src={ShowRandomizer}
            className='project-img'
          />
          <h1 className='project-title'>Show Randomizer</h1>
          <Button
            className='project-button'
            onClick={handleShowShow}
            variant='link'
          >Details</Button>
          <Modal
            size="lg"
            className='project-modal'
            show={showShow}
            onHide={handleCloseShow}
          >
            <Modal.Header closeButton>
              <Modal.Title className='project-modal-title'>Show Randomizer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                fluid
                rounded
                src={ShowRandomizer}
                className='modal-img'
              />
              <p className='mb-2 text-muted'>REACT | NODE | AXIOS | TVMAZE API</p>
              <ul>
                <li>Built a web application that randomly generates an episode from a, Image list of favorited TV shows with React and Node</li>
                <li>Used Axios to make API requests to the TVMaze API for all TV show information and images</li>
              </ul>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
              <a href='https://github.com/markallencarey/show-randomizer' target='_blank'>GitHub Repo</a>
            </Modal.Footer>
          </Modal>
        </Container>
        <Container className='project'>
          <Image
            fluid
            rounded
            src={krissbethsWorld}
            className='project-img'
          />
          <h1 className='project-title'>Krissbeth's World</h1>
          <Button
            className='project-button'
            onClick={handleShowKB}
            variant='link'
          >Details</Button>
          <Modal
            size="lg"
            className='project-modal'
            show={showKB}
            onHide={handleCloseKB}
          >
            <Modal.Header closeButton>
              <Modal.Title className='project-modal-title'>Krissbeth's World</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                fluid
                rounded
                src={krissbethsWorld}
                className='modal-img'
              />
              <p className='mb-2 text-muted'>REACT | NODE | POSTGRES | SASS | REDUX</p>
              <ul>
                <li>Built a full-stack e, Image-commerce website for a stationery shop using React, Node, Postgres, and Stripe payment implementation</li>
              </ul>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
              <a href='https://github.com/markallencarey/krissbethsworld' target='_blank'>GitHub Repo</a>
              <a href='https://krissbethsworld.com' target='_blank'>Go to Site</a>
            </Modal.Footer>
          </Modal>
        </Container>
        <Container className='project'>
          <Image
            fluid
            rounded
            src={covid19Dashboard}
            className='project-img'
          />
          <h1 className='project-title'>The COVID-19 Dashboard</h1>
          <Button
            className='project-button'
            onClick={handleShowCOVID}
            variant='link'
          >Details</Button>
          <Modal
            size="lg"
            className='project-modal'
            show={showCOVID}
            onHide={handleCloseCOVID}
          >
            <Modal.Header closeButton>
              <Modal.Title className='project-modal-title'>The COVID-19 Dashboard</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                fluid
                rounded
                src={covid19Dashboard}
                className='modal-img'
              />
              <p className='mb-2 text-muted'>REACT | SASS | BOOTSTRAP</p>
              <ul>
                <li>Handled all design and styling with Sass and React Bootstrap  for application displaying important information related to the COVID-19 pandemic</li>
              </ul>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
              <a href='https://github.com/covid-dashboard-group/covid-dashboard' target='_blank'>GitHub Repo</a>
              <a href='http://104.248.66.60:4000' target='_blank'>Go to Site</a>
            </Modal.Footer>
          </Modal>
        </Container>
      </Row>

      <Row fluid className='arrow-down-row'>
        <IoIosArrowDown className='arrow-down' size='6vh' color='#fffafa' />
      </Row>
    </Container>
  )
}

export default Projects