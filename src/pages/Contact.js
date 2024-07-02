
import React, { useState } from 'react'
import Header from '../common/Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../common/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [store, setStore] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    msg: ''
  });

  const save = (e) => {
    const { name, value } = e.target;
    setStore((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSub = (e) => {
    e.preventDefault();
    toast.success(`Your name is ${store.name}. Your mobile number is ${store.number} and email is ${store.email}, Here is What You want to say ${store.msg}`);

localStorage.setItem('Email', store.email);
localStorage.setItem('Password', store.password);


    setStore({
      name: '',
      number: '',
      email: '',
      password: '',
      msg: ''
    });
  }

  const d = [{
    title: 'Username',
    place: 'Enter your name',
    type: 'text',
    nam: 'name',
    value: store.name
  },
  {
    title: 'Phone',
    place: 'Enter your Mobile Number',
    type: 'number',
    nam: 'number',
    value: store.number
  }]

  return (
    <div>
     <ToastContainer />
      <Header />

      <h1 className='mt-5 text-center mb-5'>Contact Us</h1>
      <Container className='mb-5 pb-3'>
        <Row>
          <Col md='6' lg='6' sm='12' className='mx-auto'>

            <Form onSubmit={formSub}>
              {
                d.map((itm, i) => {
                  return (
                    <Form.Group key={i} className="mb-3" controlId={`formBasic${itm.nam}`}>
                      <Form.Label>{itm.title}</Form.Label>
                      <Form.Control type={itm.type} placeholder={itm.place} name={itm.nam} value={itm.value} onChange={save} />
                    </Form.Group>
                  )
                })
              }
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={store.email} onChange={save} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={store.password} onChange={save} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a message here" name='msg' value={store.msg} onChange={save} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit Form
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Contact
