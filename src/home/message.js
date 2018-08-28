import React, { Component } from 'react';
import './css/login.css';
import PropTypes from 'prop-types';
class Message extends Component {

  render(){

    return(
    <div className='head2'>

    <h2 className="title has-text-grey head1">Drop A Message</h2>

    <div className="box">

    <div className="field is-horizontal">
<div className="field-body">
    <div className="field ">
        <div className="control">
        <input className="input " type="text" placeholder="Your Name" autoFocus=""/>
        </div>
    </div>

    <div className="field">
        <div className="control">
            <input className="input " type="text" placeholder="UserName"/>
        </div>
    </div>
</div>
</div>
    <div className="field ">
        <div className="control">
        <input className="input " type="text" placeholder="Subject" autoFocus=""/>
        </div>
    </div>

    <div className="field">
      <div className="control">
        <textarea className="textarea" placeholder="Leave A Message...."></textarea>
      </div>
    </div>

<button className="button is-block is-danger is-medium is-fullwidth">Send us Now</button>

    </div>
    </div>
    )
  }
}

export default Message;
