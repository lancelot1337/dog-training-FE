import React, { Component } from 'react';
import '../home/css/login.css';

class Health extends Component{
  render(){
    return(
      <div>

      <nav className="navbar is-black">

        <div className="navbar-brand ">

<div className='navbar-item'>
          <span className="icon is-small ">
              <i className="fas fa-home" ></i>
            </span>
            <span >&nbsp;K9 Dog Training</span>
</div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
                <p className="control navbar-item">
                <span className="icon is-large ">
                    <i className="fas fa-2x fa-user-circle" ></i>&nbsp;
                    <i className='fas fa-lg fa-chevron-down'></i>
                  </span>
            </p>
            </div>
            </div>
            </nav>
            <br/>

<div className='columns'>

<div className="card column is-3">

  <div className="card-image box1">
    <figure className="image is-4by3">
      <img src="https://www.dogtrainercollege.us/wp-content/uploads/2015/10/dogtrainer.jpg" alt="Handler image"/>
    </figure>
  </div>

  <div className="card-content">

    <div className="media">

      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://www.dogtrainercollege.us/wp-content/uploads/2015/10/dogtrainer.jpg" alt="Placeholder image"/>
        </figure>
      </div>

      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>

    </div>

    <div className="content">

    <ul>
    <li><strong>ID:&nbsp;</strong>A9456</li>
    <li><strong>Age:&nbsp;</strong>35</li>
    <li><strong>ABC:&nbsp;</strong>bksjbak</li>
    <li><strong>XYZ:&nbsp;</strong>jjksbajk</li>
    </ul>

    </div>
 <span className="button is-success is-large">Update profile</span>
  </div>

</div>

<div className='box column is-9 box1'>
<h1 className=' title has-text-grey'>List of Dogs under John Smith:</h1>
<br/><br/>
<table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>

<thead>

      <tr>
        <th>DOG ID</th>
        <th>AGE</th>
        <th>BREED</th>
        <th>HANDLER NAME</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A1</td>
        <td>5</td>
        <td>Labrador </td>
        <td>Tanishq</td>

      </tr>
      <tr>
        <td>A2</td>
        <td>4</td>
        <td>German Shepherd</td>
        <td>John</td>

      </tr>
      <tr>
        <td>A3</td>
        <td>4.5</td>
        <td>Walker spaniel</td>
        <td>Dhruv Kumar</td>

      </tr>
      <tr>
        <td>A4</td>
        <td>6</td>
        <td>Maltis</td><td>Arjun</td>

      </tr>
      <tr>
        <td>A5</td>
        <td>5</td>
        <td>Labrador</td>
        <td>Raghav</td>

      </tr>

    </tbody>


</table>

</div>

</div>

<div className="buttons is-centered ">

  <span className="button is-info is-large">Update Dog List</span>

</div>

</div>
    )
  }

}
export default Health;
