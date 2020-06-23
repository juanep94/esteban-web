import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Esteban Perez | UI/UX Designer'
  const siteDescription = 'Personal portfolio of Juan Esteban Perez'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            I'm currently working with a great team at <a class="link" href="https://www.aimsun.com/">Aimsun</a>, collaborating on improving the interface and user experience of their traffic modeling products.
            </h2>
          </header>
          <p>
            I have a master's degree in user interfaces and user experience design from <a class="link" href="https://esdi.es/en">ESDi (Escola Superior de Disseny)</a>. I tend to do my projects user-centered and with lean methodologies, using tools such as Scrum and Google Sprints because I feel that I achieve a much more agile process that brings much more value to the end users.</p>
          <p>
            Right now I'm making a selection of my best projects to make an exhibition of them below.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Stay tuned!
              </a>
            </li>
          </ul>
        </section>
    {/*
        <section id="two">
          <h2>Projects</h2>
          <Gallery />
        </section>
    */}
        <section id="three">
          <h2>Let's talk...</h2>
          <p>
            If you have any questions, or would simply like to talk to me, please drop me a line to get in touch.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Barcelona, 08002
                  <br />
                  Spain
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +34 633 15 74 55
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a class="link" href="mailto:juanestebanp94@gmail.com">juanestebanp94@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
