import React, { Component } from 'react';

class Health extends Component{
  render(){
    return(
      <div>

      <form>
      <div className="control has-icons-left ">
          <input className="input" type="number" placeholder="Temperature"/>
          <span className="icon is-small is-left">
            <i className="fa fa-thermometer-quarter"></i>
          </span>
      </div>
      <br/>
      <div className="control has-icons-left ">
          <input className="input" type="number" placeholder="Pulse rate"/>
          <span className="icon is-small is-left">
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
          </span>
      </div>

      <br/>
      <div className="control has-icons-left ">
        <input className="input" type="text" placeholder="Health"/>
        <span className="icon is-small is-left">
            <i className="fa fa-medkit" aria-hidden="true"></i>
        </span>
      </div>
      <br/>

      <div>
        <input className="input" type="text" placeholder="Feeding"/>
      </div>

      <div>
        <br/>
      <input className="input" type="text" placeholder="Allergies"/>
      </div>

      <br/>

       <p>Vaccination</p>

       <input type="radio" name="vaccination" value="due" checked/> Due<br/>
      <input type="radio" name="vaccination" value="done"/> Done<br/>

      <button className="button" type="submit">Submit</button>
      </form>

      </div>

    )
  }

}
export default Health;
