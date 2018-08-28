import React, { Component } from 'react';

import Message from './message';
import './css/login.css';
import ImageSlider from './imageSlider';


class Home extends Component {

  render(){

    return(

      <div className='box box1'>

      <ImageSlider/>
      <br/>

      <div className="aboutus">
        <h3> ABOUT US </h3>
        <p>National Training Centre for Dogs was established in the year 1970. NTCD is a premiere institute of Government of India functioning under Border Security Force, Ministry of Home Affairs, Government of India. It has been declared Centre of Excellence by MHA in 2001 and awarded ISO certification 9001-2000 in the year 2006. The centre is devoted to imparting training to dogs and handlers of various Central Police Organisations, State Police Forces and other law enforcement agencies of India and other Foreign Nations.
        </p>
      </div>{/*aboutus*/}
      <br/>


      <div className='box box1'>
        <Message/>
        </div>

      </div>

    )
  }
}
export default Home;
