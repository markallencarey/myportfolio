import React, { useState } from 'react'
import { Container, Modal, Form, Button } from "react-bootstrap";
import axios from 'axios'
import Div100vh from 'react-div-100vh'

const Contact = (props) => {

  const [formStatus, setFormStatus] = useState(false)
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = () => e => {
    const name = e.target.name
    const value = e.target.value
    setQuery(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })

    axios.post('https://getform.io/f/e0b0261e-93cb-4ab4-8c16-c737f16ca8b6',
      formData,
      { headers: { Accept: 'application/json' } }
    ).then(res => {
      setFormStatus(true)
      setQuery({
        name: '',
        email: '',
        message: ''
      })
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const [showAlert, setShowAlert] = useState(false)

  const handleCloseAlert = () => setShowAlert(false)
  const handleShowAlert = () => setShowAlert(true)

  return (
    <Container fluid className='Contact'>
      <h1>CONTACT ME:</h1>
      <h3><a href="tel:+18013603072">801-360-3072</a></h3>
      <h3><a
        href="https://www.linkedin.com/in/markallencarey"
        target='_blank'
        rel="noreferrer"
      >LinkedIn</a></h3>
      <h3><a
        href="https://github.com/markallencarey"
        target='_blank'
        rel="noreferrer"
      >GitHub</a></h3>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label htmlFor="email" required="required">
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={query.email}
              onChange={handleChange()}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required="required"
              name="name"
              value={query.name}
              onChange={handleChange()}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={5}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your message"
              required="required"
              name="message"
              value={query.message}
              onChange={handleChange()}
            />
          </Form.Group>
          {formStatus ? (
            <Modal
              show={showAlert}
              onHide={handleCloseAlert}
            >
              <Modal.Header closeButton />
              <Modal.Body>
                <p>Your message has been sent.</p>
              </Modal.Body>
            </Modal>
          ) : (
              ""
            )}
          <Button
            type="submit"
            className="form-btn-primary"
            onClick={handleShowAlert}
          >
            Submit
            </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default Contact