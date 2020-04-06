import firebase from 'firebase';
const config={
    apiKey: "AIzaSyCWpsmpPKl4BGjetbbo7n_ITaQe2bamUZ8",
    authDomain: "cannago-ba078.firebaseapp.com",
    databaseURL: "https://cannago-ba078.firebaseio.com",
    projectId: "cannago-ba078",
    storageBucket: "cannago-ba078.appspot.com",
    messagingSenderId: "444061209106",
    appId: "1:444061209106:web:4e45bd591196bba5a1becb",
    measurementId: "G-SPM73QBHE5"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;