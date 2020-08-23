import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Join() {
    const [isRecording, setIsRecording] = useState(false);

    function onClick(event){
        setIsRecording(!isRecording);
    }
  return (
    <div>
      <h3>
        Room URL:
      </h3>
      <input type="text" name="pasteurl" />
      <Link to = "/watch" className = "buttonA"> Join </Link>

    </div>
  );
}

export default Join;
