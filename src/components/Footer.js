import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/juanep94/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/juanestebanp/" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="mailto:juanestebanp94@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          Made with&nbsp;&nbsp;<span className="icon fa-heart"></span>&nbsp;&nbsp;in Bacerlona.
        </li>
        <li>
          &copy; 2020
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
