import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <h1 className="App-header">Basic React Item Page</h1>
        <Link to='/'>Home Page</Link>
        {' '}|{' '} 
        <Link to='/shelf'>Shelf Page</Link>
      </div>
    );
  }
}

export default Header;
