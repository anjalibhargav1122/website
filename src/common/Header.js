import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import './Common.css'

const Header = () => {
  return (
    <div>

      <Container className='mt-2'>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand fw-bold fs-3 clr" href="#">TIPS-G</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavLink to='/' className='text-decoration-none'>  <li class="nav-item">
                  <a class="nav-link active ovr" aria-current="page" href="#">Home</a>
                </li> </NavLink>

                <NavLink to='/service' className='text-decoration-none'><li class="nav-item">
                  <a class="nav-link active ovr ms-3" aria-current="page" href="#">Services</a>
                </li> </NavLink>
                <NavLink to='/about' className='text-decoration-none'><li class="nav-item">
                  <a class="nav-link active ovr ms-3" aria-current="page" href="#">About</a>
                </li></NavLink>
                <NavLink to='/contact' className='text-decoration-none'> <li class="nav-item">
                  <a class="nav-link active ovr ms-3" aria-current="page" href="#">Contact</a>
                </li> </NavLink>

              </ul>

            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header