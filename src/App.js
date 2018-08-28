import React, { Component } from 'react';
import Home from './home/home';
import Login from './home/login';

import SignUp from './home/signup';

import './App.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Dog from './dog/dog';
import Handler from './handler/handler';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
      <div className="App">

      <Switch>

      <Route exact path='/' component={Login}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
    
      <Route exact path='/dog' component={Dog}/>
      <Route exact path='/handler' component={Handler}/>

      </Switch>


	    </div>
      </BrowserRouter>
    );
  }
}

export default App;
