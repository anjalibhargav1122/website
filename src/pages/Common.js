import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
  return (
    <div>

      <Container className='pb-5 mb-5 mt-5'>
        <Row>
          <Col md='6' lg='6' sm='12' className='pt-5  d-flex align-items-center'><div><h1>{props.tx} <strong className='text-info display-5 fw-bold'>TIPS-G</strong></h1>
            <h5 className='mt-3'>We are the team of talented developer <br />making your dreams</h5>
            <NavLink to={props.root} className='text-decoration-none'>  <a href='#' className='btn btn-primary mt-4'>{props.btnTx}</a></NavLink>
          </div></Col>
          <Col md='6' lg='6' sm='12' className='pt-5 '>
            <img src={props.pic} className='w-100 h-100 im' />
          </Col>

        </Row>
      </Container>





    </div>
  )
}

export default Common