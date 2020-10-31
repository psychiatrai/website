import React from 'react'
import pic02 from '../assets/images/two-hands.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>About Us</h2>
                <p>
                  We believe that mental health has reached epidemic status
                  globally, and that people deserve more support no matter
                  what their circumstances.
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                We are a work-in-progress non-profit startup where we aim to
                do the most good through 
                following <a href="https://www.effectivealtruism.org/">Effective Altruism</a> principles 
                to try and deliver evidence-based mental health interventions
                at scale digitally. We would later like to scale to non-digital solutions
                as well to cater to nearly half of the world population without internet access.
                Current solutions in the digital mental health space do not cater to complex, 
                difficult-to-treat disorders. 
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                
                Considering <a href="https://www.youtube.com/watch?v=IeD3nZX1Sr4">Logarithmic scales of pleasure and pain</a>, we 
                think that such disorders cause much more suffering and pain, and thus warrant our attention and efforts. 
                While we would likely start with something less ambitious, 
                our aim is to develop a solution which caters to everyone 
                in need of help, support, and care;
                while adopting a user-centered agile development approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
