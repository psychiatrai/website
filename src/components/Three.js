import React from 'react'
import pic04 from '../assets/images/dreams.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${pic04})` }}
  >
    <span className="image fit main bottom">
      <img src={pic04} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <h2>Who are we</h2>
          <p>A diverse team of people from various backgrounds interested
            in contributing positively to the world.
          </p>
        </header>
        <p>
          <ul>
            <li>Salman Maqbool</li>
            <li>Zi Qi Kok</li>
            <li>Hamid Gilani</li>
          </ul>
          Together we have a background in computer science, machine learning, 
          artificial intelligence, medicine, neuroscience, neurology, cognitive science, 
          development economics, behavioral economics.
        </p>
        <p>
          We are curious people who want to understand ourselves and the world
          around us, and helping out those not as priveleged as we have been.
        </p>
      </div>
    </Fade>
    <ScrollLink
      to="four"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Three
