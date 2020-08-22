import React, { useEffect, useState } from 'react';
import { db } from './firebase/config';
function App() {
	const [ text, setText ] = useState([]);
	useEffect(() => {
		try {
			db.ref().on('value', (snapshot) => {
				let data = [];
				snapshot.forEach((snap) => {
					data.push(snap.val().content + ' ');
				});
				setText(data); // Reads from realtime DB and stores into state
			});
		} catch (e) {
			console.log(e);
		}
	}, []);

	useEffect(() => {
		const writeData = async () => {
			try {
				await db.ref().push({
					content: 'lorem2' // lorem2 should be replaced with text from Google Speech2Text API
				});
			} catch (e) {
				console.log(e);
			}
		};

		writeData();
	}, []); // will need to re-render everytime we get new text from Google Speech2Text API

	return <div className="App">{text}</div>; // print out all lines of text
}

export default App;
