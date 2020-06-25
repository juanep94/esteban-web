import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://www.linkedin.com/in/juanep94/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        Hello!&nbsp;
        <br />
        <strong>I'm Juan Esteban,</strong>&nbsp;
        <br />
        UI/UX designer&nbsp;
        <br />
        based in Barcelona.
      </h1>
      <h2>
        <span class="emoji">👋</span>
      </h2>
    </div>
    <Footer />
  </header>
)

export default Header
