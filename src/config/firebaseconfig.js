import firebase from "firebase";
import "firebase/storage";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD-fwe0Q5Mz1GJMsHMLm2jZ6b83tt88pjc",
	authDomain: "giftme-cea58.firebaseapp.com",
	projectId: "giftme-cea58",
	storageBucket: "giftme-cea58.appspot.com",
	messagingSenderId: "513421234714",
	appId: "1:513421234714:web:216c85543f7a863860f7a3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;
