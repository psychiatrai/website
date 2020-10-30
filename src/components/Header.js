import React from 'react'
import { Link } from 'gatsby'

const timeoutLength = 300

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobileActiveClass: '',
      mouseOverButton: false,
      mouseOverMenu: false,
      mouseOverSubButton: false,
      mouseOverSubMenu: false,
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        // set the class for the mobile menu
        this.state.active
          ? this.setState({
              mobileActiveClass: 'navPanel-visible',
            })
          : this.setState({
              mobileActiveClass: '',
            })
      }
    )
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  enterButton = () => {
    this.setState({ mouseOverButton: true })
  }

  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false })
    }, timeoutLength)
  }

  enterMenu = () => {
    this.setState({ mouseOverMenu: true })
  }

  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false })
    }, timeoutLength)
  }

  enterSubButton = () => {
    this.setState({ mouseOverSubButton: true })
  }

  leaveSubButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubButton: false })
    }, timeoutLength)
  }

  enterSubMenu = () => {
    this.setState({ mouseOverSubMenu: true })
  }

  leaveSubMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubMenu: false })
    }, timeoutLength)
  }

  render() {
    const siteTitle = this.props.siteTitle

    return (
      <React.Fragment>
        <div className={`navbar-menu ${this.state.mobileActiveClass}`}>
          <div id="titleBar">
            <span className="title">
              <Link to="/">{siteTitle}</Link>
            </span>
          </div>
        </div>

        <header id="header">
          <h1 id="logo">
            <Link to="/">{siteTitle}</Link>
          </h1>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
