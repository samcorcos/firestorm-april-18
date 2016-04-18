import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import axios from 'axios'

import Button from 'components/Button'

class FormSignup extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    const user = {
      username: document.getElementById('signup-username').value,
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    }

    axios.post('http://localhost:4000/api/users', {
      user
    }).then(function(res) {
      console.log(res);
    }).catch(function(res) {
      console.log(res);
    })
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form">
          <div styleName="input-group">
            <label htmlFor="signup-username">Username</label>
            <input styleName="input" type="text" id="signup-username" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-email">Email</label>
            <input styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-password">Password</label>
            <input styleName="input" type="password" id="signup-password" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-verify-password">Verify Password</label>
            <input styleName="input" type="password" id="signup-verify-password" />
          </div>
        </div>
        <Button onClick={this.submit} type="primary">
          Submit
        </Button>
      </div>
    )
  }
}

export default CSSModules(FormSignup, style)
