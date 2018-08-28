import React, { Component } from 'react';
import './css/login.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

class NavBar extends Component {

   toggleBurger() {

      var menu = document.querySelector('.navbar-menu');
      var burger=document.querySelector('.burger');
      burger.classList.toggle('is-active');
          menu.classList.toggle('is-active');
  }

  render(){

    return(
      <div>

  <nav className="navbar is-black">

    <div className="navbar-brand">

      <Link className='navbar-item' to={'/'}>
      <span className="icon is-small">
          <i className="fas fa-home" ></i>
        </span>
        <span>&nbsp;K9 Dog Training</span>
        </Link>

      <div className="navbar-burger burger" data-target="navbarval" onClick={this.toggleBurger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarval" className="navbar-menu">
      <div className="navbar-end">

      <p className="control">
          <Link className='navbar-item button is-link box1' to={'/signup'} >
            <span>Sign Up</span>
          </Link>
        </p>

<p className="control">
          <Link className='navbar-item button is-link box1' to={'/login'} >
          <span>Login</span>
          </Link>
        </p>

        </div>
      </div>

  </nav>

        </div>



    )}
  }

export default NavBar;
