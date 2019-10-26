import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import HomeComponent from './pages/HomeComponent';
import Login from './pages/Login';
import './styles/style.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div  className="menu">
          <ul >
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/Login"> Login </Link>
            </li>
          
          </ul>
        
          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/Login' component={Login}></Route>

        </div>
      </Router>
    );
  }
}

export default App;