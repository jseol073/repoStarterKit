import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import NavBar from './headerComponent/navBar.js';
import Header from './headerComponent/header.js';
import Footer from './footerComponent/footer.js';
import About from './pages/About.js';
import Projects from './Projects';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Header />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;