import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/config';
function Test() {
	//const messagesEndRef = useRef(null);
	const [text, setText] = useState([]);
	useEffect(() => {
		try {
			db.ref().on('value', (snapshot) => {
				let data = [];
				snapshot.forEach((snap) => {
					data.push(snap.val().content + ' ');
				});
				console.log(data);
				setText(data); // Reads from realtime DB and stores into state
			});
		} catch (e) {
			console.log(e);
		}
		//messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	return <div className="transcriptCon">{text}</div> 
		{/*<div ref={messagesEndRef} />*/}  // print out all lines of text
	
}
export default Test;