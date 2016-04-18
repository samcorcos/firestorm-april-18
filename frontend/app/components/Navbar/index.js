import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Modal from 'components/Modal'
import FormLogin from 'components/FormLogin'
import FormSignup from 'components/FormSignup'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      modalType: ""
    }
  }

  close() {
    this.setState({ modalIsOpen: false })
  }

  open(type) {
    this.setState({
      modalIsOpen: true,
      modalType: type
    })
  }

  render() {
    return (
      <nav styleName="navbar">
        <Modal
          close={ this.close.bind(this) }
          isOpen={ this.state.modalIsOpen }>
          { this.state.modalType === "login" ? <FormLogin /> : <FormSignup />}
        </Modal>
        <div styleName="logo-container">
          <h1 styleName="logo">LOGO</h1>
          <span styleName="sub-heading">The unofficial news source for the Phoenix Framework.</span>
        </div>
        <div styleName="filter-container">
          <input placeholder="Search" />
          <select name="Filter">
            <option value="1">Option</option>
          </select>
        </div>
        <div styleName="login-container">
          <div onClick={ this.open.bind(this, "login") }>
            Login
          </div>
          <button onClick={ this.open.bind(this, "signup") }>
            Signup
          </button>
        </div>
      </nav>
    )
  }
}

export default CSSModules(Navbar, style)
