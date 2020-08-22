import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyBzN5MTXipw2EdEhk-ZsR9ZB_cO4Gp8Dwo',
	authDomain: 'hackathon-285803.firebaseapp.com',
	databaseURL: 'https://hackathon-285803.firebaseio.com',
	projectId: 'hackathon-285803',
	storageBucket: 'hackathon-285803.appspot.com',
	messagingSenderId: '272399976569',
	appId: '1:272399976569:web:d182f1f7e6667f541a6ca8',
	measurementId: 'G-4TPN6KK3P7'
};

firebase.initializeApp(config);

export const db = firebase.database();
