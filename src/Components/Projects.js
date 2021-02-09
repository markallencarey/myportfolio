import React from 'react'
import { Container, CardDeck, Card } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io'
import ShowRandomizer from '../assets/projects/showRandomizer.png'
import krissbethsWorld from '../assets/projects/krissbethsWorld.png'
import covid19Dashboard from '../assets/projects/covid19Dashboard.png'

const Projects = (props) => {

  return (
    <Container fluid className='Projects'>
      <CardDeck fluidclassName='card-deck'>

        <Card className='Card'>
          {/* <a href="" target="_blank"> */}
          <Card.Img
            variant='top'
            src={ShowRandomizer}
            className='card-img'
          />
          {/* </a> */}
          <Card.Body>
            <Card.Title className='card-title'>Show Randomizer</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>REACT | NODE | AXIOS | TVMAZE API</Card.Subtitle>
            <Card.Text className='card-text'>
              <ul>
                <li>Built a web application that randomly generates an episode from a list of favorited TV shows with React and Node
</li>
                <li>Used Axios to make API requests to the TVMaze API for all TV show information and images</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href='https://github.com/markallencarey/show-randomizer'>GitHub Repo</Card.Link>
          </Card.Footer>
        </Card>

        <Card className='Card'>
          <a href="https://krissbethsworld.com/" target="_blank">
            <Card.Img
              variant='top'
              src={krissbethsWorld}
              className='card-img'
            />
          </a>
          <Card.Body>
            <Card.Title className='card-title'>Krissbeth's World</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>REACT | NODE | POSTGRES | SASS | REDUX</Card.Subtitle>
            <Card.Text className='card-text'>
              <ul>
                <li>Built a full-stack e-commerce website for a stationery shop using React, Node, Postgres, and Stripe payment implementation</li>
              </ul>
                </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href='https://github.com/markallencarey/krissbethsworld'>GitHub Repo</Card.Link>
          </Card.Footer>
        </Card>

        <Card className='Card'>
          <a href="http://104.248.66.60:4000/" target="_blank">
            <Card.Img
              variant='top'
              src={covid19Dashboard}
              className='card-img'
            />
          </a>
          <Card.Body>
            <Card.Title className='card-title'>The COVID-19 Dashboard</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>REACT | SASS | BOOTSTRAP</Card.Subtitle>
            <Card.Text className='card-text'>
              <ul>
                <li>Handled all design and styling with Sass and React Bootstrap  for application displaying important information related to the COVID-19 pandemic</li>
              </ul>
                </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href='https://github.com/covid-dashboard-group/covid-dashboard'>GitHub Repo</Card.Link>
          </Card.Footer>
        </Card>
      </CardDeck>
      <IoIosArrowDown className='arrow-down' size='50px' />
    </Container>
  )
}

export default Projects