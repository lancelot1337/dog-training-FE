import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './css/login.css';
const imgUrls = [
	,
	,
	,
	,

];

class imageSlider extends Component {


  render(){

    return(
      <div className='mySlides'>
			<div className='carousel carousel-animated carousel-animate-slide ' style={{maxHeight:'400px'}} data-autoplay="true">
<div className='carousel-container'>
<div className='carousel-item has-background is-active'>
<img className="is-background" src="http://www.southerntraditionkennels.com/wp-content/uploads/2016/04/Aussie-Obedience-Header-PNG-SM2-copy.png" alt=""  />
<div className="title">Merry Christmas</div>
</div>
<div className='carousel-item has-background'>
<img className="is-background" src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/5-essential-commands-you-can-teach-your-dog_1.jpg?itok=nYOp-YSR" alt=""  />
<div className="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank">La Song Box</a></div>
</div>
<div className='carousel-item has-background'>
<img className="is-background" src="https://i.ytimg.com/vi/gcsV1QpH6Jk/hqdefault.jpg" alt=""  />
<div className="title">Sushi time</div>
</div>
<div className='carousel-item has-background'>
<img className="is-background" src="http://pittsburghdogtraining.com/wp-content/uploads/2013/09/pittsburgh-dog-training-and-german-shepherd-dogs123.jpg" alt=""  />
<div className="title">Sushi time</div>
</div>
<div className='carousel-item has-background'>
<img className="is-background" src="http://www.nevadahaus.com/german-shepherd-breeders/2012-01-30-002-061.JPG" alt="" />
<div className="title">Life</div>
</div>
</div>
<div className="carousel-navigation is-overlay">
<div className="carousel-nav-left">
<i className="fa fa-chevron-left" aria-hidden="true"></i>
</div>
<div className="carousel-nav-right">
<i className="fa fa-chevron-right" aria-hidden="true"></i>
</div>
</div>
</div>

      </div>
    )
  }
}

export default imageSlider;
