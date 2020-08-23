import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'


function Url() {
    const [isRecording, setIsRecording] = useState(false);

    function onClick(event){
        setIsRecording(!isRecording);
    }
  return (
    <div>
      <h3>
        Your Room's URL is
      </h3>
      <h4>
          sublive.com/283d4a91
      </h4>
      <Link to = "/record" className = "buttonA"> Start </Link>

    </div>
  );
}

export default Url;
