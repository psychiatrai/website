import React from 'react'
import pic03 from '../assets/images/flower.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Proposed approach</h2>
          <p>A hierarchical platform which allows users to access different levels
            of help based on their need
          </p>
        </header>
        <p>
          Cognitive Behavioral Therapy (CBT) has proven to be an effective method
          to reduce symptoms of various mental and physical health issues. Guided CBT
          has the additional advantage to increase retention rate
          throughout the programs.
        </p>
        <p>
          Community and integration are other significant predictors of well-being, and the
          lack of these can lead to significant misery. We aim to integrate these in a 
          single platform, where people can seek help comfortably, without having to
          worry about their finances or communal stigma, and while building a 
          community and support system throughout this.
        </p>
      </div>
    </Fade>
    <ScrollLink
      to="three"
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

export default Two
