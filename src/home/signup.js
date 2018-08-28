import React, { Component } from 'react';
import './css/login.css';
import Home from './home';
import NavBar from './navbar';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
class SignUp extends Component {

  render(){

    return(
      <div>

<NavBar/>

<div className='columns'>
     <div className='column is-9'>
     <Home/>
     </div>
     <div className='column is-3'>

      <div className='box box1' style={{marginLeft:'0px'}}>

      <div className="field">
        <div className="control">
        <label className="label">Type of User</label>
          <label className="radio ">
            <input type="radio" name="question"/>
            &nbsp; Admin &nbsp;
          </label>
          <label className="radio">
            <input type="radio" name="question"/>
            &nbsp;  Handler
          </label>
        </div>
      </div>

      <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div className="field">
  <label className="label">Username</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" type="text" placeholder="Text input"/>
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input " type="email" placeholder="Email input" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>

</div>

<div className="field">
<label className="label">Password</label>
<div className="control">
<input className="input" type="password" placeholder="Text input"/>
</div>
</div>

<div className="field">
<label className="label">Confirm Password</label>
<div className="control">
<input className="input" type="password" placeholder="Text input"/>
</div>
</div>

<div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

  <Link className="button is-block is-info is-medium is-fullwidth" to={'./handler'}>Sign Up</Link>

</div>
</div>
</div>
</div>
    )
  }
}
export default SignUp;
