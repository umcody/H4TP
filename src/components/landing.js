import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {


  return (
    <div>
      <h4>
        Create a live transcript through the microphone's audio
      </h4>
      <div style ={{marginTop:"30px"}}>
        <Link to = "/join" className = "button"> Join </Link>
        <Link to = "/language" className = "button"> Create Transcript </Link>
      </div>
    </div>
  );
}

export default Landing;