import firebase from 'firebase';
const config={
    apiKey: "AIzaSyBzgi19hDdQhWIbcwQQ20QQlSo5HDJNzpE",
    authDomain: "cannago-ba078.firebaseapp.com",
    databaseURL: "https://cannago-ba078.firebaseio.com",
    projectId: "cannago-ba078",
    storageBucket: "cannago-ba078.appspot.com",
    messagingSenderId: "444061209106",
    appId: "1:444061209106:web:851592f0afbafe1da1becb",
    measurementId: "G-5Y9DLF5NT9"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;