import React from 'react'
import Header from '../common/Header'
import Common from './Common'

import ab from '../img/ab.png';
import Footer from '../common/Footer';

const About = () => {
  return (
    <div><Header />
      <Common tx='Welcome to About Page' btnTx='Contact Now' pic={ab} root='/contact' />
      <Footer />
    </div>
  )
}

export default About