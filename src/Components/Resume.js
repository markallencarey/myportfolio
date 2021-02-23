import React, { useState } from 'react'
import { Container, Carousel, Image, Row, Modal, Tabs, Tab } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io'
import MyPic from '../assets/myPics/myPic-tiny.jpeg'
import MyPic2 from '../assets/myPics/myPic2-tiny.jpeg'
import MyPic3 from '../assets/myPics/myPic3-tiny.jpeg'
import Div100vh from 'react-div-100vh'

const Resume = (props) => {

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  const interval = (1000 * 1000)

  return (
    // <Div100vh>
    <Container fluid className='Resume'>
      <Tabs
        className='Tabs'
        defaultActiveKey='about'
      >
        <Tab
          className='Tab'
          eventKey='about'
          title='About'
        >
          <Container className='Tab-Title'>
            <h1>ABOUT</h1>
            <Container className='about-imgs'>
              <Image
                className='resume-img'
                rounded
                xs={6} med={4}
                src={MyPic}
                onClick={handleShow1}
              />
              <Image
                className='resume-img'
                rounded
                xs={6} med={4}
                src={MyPic2}
                onClick={handleShow2}
              />
              <Image
                className='resume-img'
                rounded
                xs={6} med={4}
                src={MyPic3}
                onClick={handleShow3}
              />
            </Container>
            <Container className='click-photo'>
              <h6>Click image for enlarged photo</h6>
            </Container>
            <Modal
              centered
              className='resume-modal'
              show={show1}
              onHide={handleClose1}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <Image
                  fluid
                  rounded
                  className='resume-img-modal'
                  src={MyPic}
                />
              </Modal.Body>
            </Modal>
            <Modal
              centered
              className='resume-modal'
              show={show2}
              onHide={handleClose2}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <Image
                  fluid
                  rounded
                  className='resume-img-modal'
                  src={MyPic2}
                />
              </Modal.Body>
            </Modal>
            <Modal
              centered
              className='resume-modal'
              show={show3}
              onHide={handleClose3}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <Image
                  fluid
                  rounded
                  className='resume-img-modal'
                  src={MyPic3}
                />
              </Modal.Body>
            </Modal>
          </Container>
          <br />
          <Container className='Carousel-Info'>
            <h2>LEHI, UTAH</h2>
            <h2><strong>Interests</strong></h2>
            <p>MUSIC PRODUCTION | GUITAR | SONGWRITING | CELLO | BYU FOOTBALL | BYU BASKETBALL | LA DODGERS | COOKING | PHOTOGRAPHY | BOARD GAMES | STAR WARS | HARRY POTTER | MARVEL</p>
          </Container>
          <Container className='Carousel-Info'>
            <h2><strong>Skills</strong></h2>
            <p>HTML5 | JAVASCRIPT | CSS3 | NODEJS | EXPRESS | SASS | REACT | POSTGRES | GIT | SQL | STRIPE | POSTMAN | AXIOS | MASSIVE | REDUX | PYTHON | BOOTSTRAP | SPANISH</p>
          </Container>
        </Tab>
        <Tab
          className='Tab'
          eventKey='education'
          title='Education'
        >
          <Container className='Tab-Title'>
            <h1>EDUCATION</h1>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Devmountain</strong> | Full-Stack Web Development Certificate</h3>
            <p>REMOTE</p>
            <ul><li>Immersive full-stack web development course in a remote format</li></ul>
            <h3><strong>Brigham Young University - Idaho</strong> | Computer Science Certificate (in progress)</h3>
            <p>REMOTE</p>
            <ul><li>Taken two different introduction to programming classes - one focusing on Javascript and the other focusing on Python</li></ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Brigham Young University</strong> | Bachelor of Music in Sound Recording Technology</h3>
            <p>PROVO, UT</p>
            <ul><li>Courses included Pro Tools, music production, audio engineering, advanced music theory, in-depth music history, various musical performing groups, songwriting, and private cello and music production lessons</li></ul>
          </Container>
        </Tab>
        <Tab
          className='Tab'
          eventKey='experience'
          title='Experience'
        >
          <Container className='Tab-Title'>
            <h1>EXPERIENCE</h1>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Devmountain Student Developers</strong> | Web Developer</h3>
            <h4>NOVEMBER 2020 - FEBRUARY 2021, REMOTE</h4>
            <Container className='Carousel-Info'>
              <h5>Show Randomizer | GITHUB REPO | DEMO</h5>
              <p>REACT | NODE | AXIOS | TVMAZE API</p>
              <ul>
                <li>Built a web application that randomly generates an episode from a list of favorited TV shows with React and Node</li>
                <li>Used Axios to make API requests to the TVMaze API for all TV show information and images</li>
              </ul>
            </Container>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Devmountain Student Developers</strong> | Web Developer</h3>
            <h4>NOVEMBER 2020 - FEBRUARY 2021, REMOTE</h4>
            <Container className='Carousel-Info'>
              <h5>KrissbethsWorld | GITHUB REPO | DEMO</h5>
              <p>REACT | NODE | POSTGRES | SASS | REDUX</p>
              <ul>
                <li>Built a full-stack e-commerce website for a stationery shop using React, Node, Postgres, and Stripe payment implementation</li>
              </ul>
            </Container>
            <Container className='Carousel-Info'>
              <h5>The COVID-19 Dashboard | GITHUB REPO | DEMO</h5>
              <p>REACT | SASS | BOOTSTRAP</p>
              <ul>
                <li>Handled all design and styling with Sass and React Bootstrap  for application displaying important information related to the COVID-19 pandemic</li>
              </ul>
            </Container>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Sweetwater</strong> | Sales Engineer</h3>
            <h4>JULY 2018 - SEPTEMBER 2020, FORT WAYNE, IN</h4>
            <ul>
              <li>Developed a client base of 3000+ clients using efficient marketing strategies</li>
              <li>Cultivated personal relationships  with each client while making individualized recommendations for music and audio gear, creating quotes and invoices, and managing inventory with database program 4D</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>TAP Productions</strong> | Assistant Recording Engineer</h3>
            <h4>JUNE 2016 -JUNE  2017, LOS ANGELES, CA</h4>
            <ul>
              <li>Handled post processing and music production of recordings as well as storage of recording files and delivery to major music labels for top LA music producer Tim Pagnotta</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Video Tech Services</strong> | Event Technician</h3>
            <p>SEPTEMBER 2016 - JANUARY 2017, LOS ANGELES, CA - CONTRACT</p>
            <ul>
              <li>Oversaw the audio, video, and lighting of live events - including equipment set-up, live audio engineering, and interfacing with clients</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Bigger Hammer</strong> | Event Technician</h3>
            <p>SEPTEMBER 2016 - JANUARY 2017, LOS ANGELES, CA - CONTRACT</p>
            <ul>
              <li>Oversaw the audio, video, and lighting of live events - including equipment set-up, live audio engineering, and interfacing with clients</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Mountain Beach House Studio</strong> | Music Producer</h3>
            <p>JANUARY 2013 -  DECEMBER 2015, PROVO, UT</p>
            <ul>
              <li>Owned and ran music production house and recording studio Mountain Beach House Studio</li>
              <li>Handled finances, marketing, and logistics of studio</li>
              <li>Produced and recorded albums and singles for many artists and bands</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>LDS Missionary Training Center</strong></h3>
            <p>JULY 2010 - AUGUST 2015, PROVO, UT</p>
            <Container className='Carousel-Info'>
              <h4>Supervisor of Technical Services</h4>
              <p>MAY 2014 - AUGUST 2015</p>
              <ul>
                <li>Installing and repairing audio/video equipment for major systems</li>
                <li>Acted as production manager for many broadcasts and events</li>
                <li>Involved in design, installation, set-up, and training of a new broadcast audio booth, FOH system, and Dante system</li>
              </ul>
            </Container>
            <Container className='Carousel-Info'>
              <h4>Manager of Training</h4>
              <p>JANUARY 2011 - MAY 2014</p>
              <ul>
                <li>In charge of teaching new employees about equipment use, signal flow, and skills necessary to provide audio/visual support for meetings and events</li>
                <li>Wrote a manual on advanced audio/visual principles, equipment, and systems for future use in training</li>
              </ul>
            </Container>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>LDS Missionary Training Center</strong></h3>
            <Container className='Carousel-Info'>
              <h4>Event Technician</h4>
              <p>JULY 2010 - JANUARY 2011</p>
              <ul>
                <li>Ran audio/visual equipment for large and small scale meetings for two and a half years</li>
                <li>Mixed audio for meetings of 3000+ people in a lecture/conference setting (meetings occasionally broadcast internationally); also operated remote and handheld cameras, teleprompter, video switcher</li>
              </ul>
            </Container>
            <Container className='Carousel-Info'>
              <h3><strong>Hale Center Theatre</strong> | Live Audio Engineer</h3>
              <p>AUGUST 2015 - DECEMBER 2015, SALT LAKE CITY, UT - CONTRACT</p>
              <ul>
                <li>Mixed the in-house sound for productions of Disney’s The Little Mermaid and Big Fish</li>
                <li>20-30 cast members with microphones</li>
                <li>Ran audio and sound effects from a Q-Lab system</li>
              </ul>
            </Container>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>June Audio Recording Studios</strong> | Assistant Recording Engineer</h3>
            <p>JANUARY 2012 - JULY 2013, PROVO, UT</p>
            <ul>
              <li>Intern for engineer Scott Wiley</li>
              <li>Helped set up and facilitate recording sessions and acted as assistant engineer on several sessions</li>
              <li>Mic placement, patching, and running the Pro Tools session, among other tasks</li>
              <li>Worked with notable clients Ron Aniello, Nick Didia, Tim Pagnotta, Branden Campbell of Neon Trees, Fictionist, John Allred, Nate Pyfer, Tyler Castleton, Sam Cardon</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Cardston Community Theater</strong> | Live Audio Engineer</h3>
            <p>MAY 2015 - MAY 2015, CALGARY, CANADA - CONTRACT</p>
            <ul>
              <li>Oversaw sound design and sound engineering of theater production of “Chitty-Chitty Bang-Bang”, including managing and training a team of audio engineers</li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>BYU Young Ambassadors</strong> | Live Audio Engineer</h3>
            <p>AUGUST 2011 - MAY 2014, PROVO, UT</p>
            <ul>
              <li>Worked on technical crew for a singing/dancing performing group, providing intensive audio mixing for the shows</li>
              <li>One year each as A1 & A2 FOH mixing engineer, vocal microphones for 20 singers</li>
              <li>
                One year as A3 backstage RF/microphone technician
                Toured Western United States, South Africa, Botswana, Swaziland, China, Hong Kong, Thailand, Cambodia, and Vietnam
                    </li>
            </ul>
          </Container>
          <Container className='Carousel-Info'>
            <h3><strong>Carriage House Theater</strong> | Live Audio Engineer</h3>
            <p>JUNE 2013 - JUNE 2013, CALGARY, CANADA - CONTRACT</p>
            <ul>
              <li>Oversaw sound design and sound engineering of theater production of “Les Miserables”</li>
              <li>Re-designed, installed, and implemented new sound systems in theater</li>
            </ul>
          </Container>
        </Tab>
      </Tabs>
      {/* <Row fluid className='arrow-down-row-resume'>
          <IoIosArrowDown className='arrow-down' size='6vh' color='#fffafa' />
        </Row> */}
    </Container >
    // </Div100vh>
  )
}

export default Resume