import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from 'redux/store'


import Home from 'components/Home'
import ProfileShow from 'components/ProfileShow'
import PostShow from 'components/PostShow'
import Navbar from 'components/Navbar'
import Modal from 'components/Modal'
import FormSignup from 'components/FormSignup'

import reset from 'styles/reset'

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Modal>
        <FormSignup />
      </Modal>
      { props.children }
    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="profile" component={ProfileShow} />
        <Route path="post" component={PostShow} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root'))
