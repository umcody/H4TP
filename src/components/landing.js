import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {


  return (
    <div>
      <h4>
      Create a live transcript through the tab’s audio
      </h4>
      <div style ={{marginTop:"30px"}}>
      <Link to = "/watch" className = "button"> Watch </Link>
        <Link to = "/url" className = "button"> Record </Link>
      </div>
    </div>
  );
}

export default Landing;
