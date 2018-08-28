import React, { Component } from 'react';
import './css/creator.css'
class Creator extends Component {

  render(){

    return(
      <div id='creator-box' className='conatiner'>
      <h1>Creators</h1>
      <hr/>
      <div className='row'>

      <div className='col-sm-3'>
      <img src='http://getdrawings.com/img/unknown-person-silhouette-6.png' className='dp-img'/ >
      </div>
      <div className='col-sm-9' >
      <p>Sezal Chugh</p>
      <p>IIIT-D</p>
      </div>
      </div>
      <hr/>
      <div className='row'>
      <div className='col-sm-3'>
      <img src='http://getdrawings.com/img/unknown-person-silhouette-6.png' className='dp-img'/>
      </div>
      <div className='col-sm-9'>
      <p>Yogesh Aggarwal</p>
      <p>NSIT</p>
      </div>
      <br/>
      </div>
      <hr/>
      <div className='row'>
      <div className='col-sm-3'>
      <img src='http://getdrawings.com/img/unknown-person-silhouette-6.png' className='dp-img'/>
      </div>
      <div className='col-sm-9'>
      <p>Sudhanshu</p>
      <p>NSIT</p>
      </div>
      <hr/>


</div>

</div>

    )
  }
}
export default Creator;
