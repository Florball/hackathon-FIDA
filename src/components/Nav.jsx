import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from '../pages/Login'
import Products from '../pages/Products'

class Nav extends Component {

  render() {
    return(
      <Router>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  class="navbar-nav">
              <li  class="nav-item active">
                <Link to ='/'>Home</Link>
              </li>
              <li  class="nav-item">
                <Link to='/Login'>Iniciar sesión </Link>
              </li>
            </ul>
        </div>
        <Route exact path='/' component={Products}></Route>
        <Route exact path='/Login' component={Login}></Route>
      </div>
    </Router>
    )
  }
}
export default Nav