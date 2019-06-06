import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyAWbI_eHCT9mVTFpXxa-nsqmoTOKrjNd4U',
	authDomain: 'marioplan-d75b4.firebaseapp.com',
	databaseURL: 'https://marioplan-d75b4.firebaseio.com',
	projectId: 'marioplan-d75b4',
	storageBucket: 'marioplan-d75b4.appspot.com',
	messagingSenderId: '1064135362861',
	appId: '1:1064135362861:web:98a36cafa5e5f786'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings();

export default firebase;
