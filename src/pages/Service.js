import React from 'react'
import Header from '../common/Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import we from '../img/web.webp';
import di from '../img/di.jpg';
import an from '../img/an.jpg';
import so from '../img/so.jpg';
import ma from '../img/cy.jpg';
import app from '../img/b2.jpg';
import Footer from '../common/Footer';

const Service = () => {

  const data = [{
    img: ma,
    title: 'Cyber Security'
  },
  {
    img: an,
    title: 'Android development'
  },
  {
    img: we,
    title: 'Web development'
  },
  {
    img: app,
    title: 'App development'
  },
  {
    img: so,
    title: 'Software development'
  },
  {
    img: di,
    title: 'Digital Marketing'
  }]
  return (
    <div><Header />
      <h1 className='mt-5 text-center mb-5'>Our Services</h1>
      <Container className='mb-5'>
        <Row className='gy-4'>
          {
            data.map((itm, i) => {
              return (
                <Col md='4' lg='4' sm='12' key={i} >
                  <Card className='ht' >
                    <Card.Img variant="top" src={itm.img} />
                    <Card.Body>
                      <Card.Title>{itm.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card></Col>
              )
            })
          }
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Service