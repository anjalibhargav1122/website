import React from 'react'
import Header from '../common/Header'
import Common from './Common'

import web from '../img/we.jpg';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <div><Header />
      <Common tx='Grow your career with' btnTx='Get Started' pic={web} root='/service' />
      <Footer />
    </div>
  )
}

export default Home