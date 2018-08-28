import React, { Component } from 'react';
import './css/login.css';
import Home from './home';
import NavBar from './navbar';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
class Login extends Component {

  render(){


    return(
      <div>

      <NavBar/>
<div className='columns'>
      <div className='column is-9'>
      <Home/>
      </div>

      <div className='column is-3'>

      <div className="box1" style={{marginLeft:'0px'}}>
      <div className="box">

            <div className="container head1">
<br/>
                  <h3 className="title has-text-grey" >Login</h3>
                    <p className="subtitle has-text-grey">Please login to proceed.</p>
                    </div><br/><br/>

      <form action='/handler'>
      <div className="field">
          <div className="control">
          <label className="label">UserName</label>
              <input className="input " type="text" placeholder="Your UserName" autoFocus=""/>
          </div>
      </div>

      <div className="field">
          <div className="control">
          <label className="label">Password</label>
              <input className="input " type="password" placeholder="Your Password"/>
          </div>
      </div>

<Link className="button is-block is-info is-medium is-fullwidth" to={'/handler'}> Login</Link>
</form>

</div>
<p className="has-text-grey">
                  <Link to={'/signup'}>Sign Up</Link> &nbsp;·&nbsp;
                  <a href="#">Forgot Password</a> &nbsp;·&nbsp;
                  <a href="#">Need Help?</a>
              </p>

    </div>

</div>
</div>
</div>

    )
  }
}
export default Login;
