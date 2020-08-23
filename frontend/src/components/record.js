import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Record() {
    const [isRecording, setIsRecording] = useState(false);

    function onClick(event){
        setIsRecording(!isRecording);
    }
  return (
    <div>
      <h3>
        Allow Your Microphone Upon Pop-up
      </h3>
      <div style ={{marginTop:"30px", justifyContent:"center", display:"flex"}} onClick={onClick}>
        <div style={{position:"absolute"}} className = {isRecording?"recordT":"recordF"}>
            <div style = {{top:"50%", position:"relative", transform:"translate(0,-50%)"}}>{isRecording?"Transcribing...":"Start"}</div>
        </div>
      </div>
    </div>
  );
}

export default Record;
