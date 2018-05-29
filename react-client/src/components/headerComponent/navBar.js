import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton3"><Link to="">Home</Link></li>
          <li className="navButton1"><Link to="">About</Link></li>
          <li className="navButton2"><Link to="">Projects</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;