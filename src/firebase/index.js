import firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyAx83PxsnZltdiKjfGYlSrGdOeZJcb4Hi0",
    authDomain: "meal-prep-sample.firebaseapp.com",
    databaseURL: "https://meal-prep-sample.firebaseio.com",
    projectId: "meal-prep-sample",
    storageBucket: "meal-prep-sample.appspot.com",
    messagingSenderId: "49328700363",
    appId: "1:49328700363:web:06bec1ff1e96eba6"
};

// Initialize Firebase
firebase.initializeApp(config);