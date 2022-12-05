
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAmgjT4bRAsAju-gYBlyeYM9YTVpoFBU6k",
    authDomain: "learning-de268.firebaseapp.com",
    projectId: "learning-de268",
    storageBucket: "learning-de268.appspot.com",
    messagingSenderId: "441673338172",
    appId: "1:441673338172:web:9a224ecd111394f835a239",
    measurementId: "G-J86GPXQWTZ"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export default auth;


