import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHT8qfZOGGZ19inADqMRL1bG2axj3kKHc",
    authDomain: "cclothing-db.firebaseapp.com",
    databaseURL: "https://cclothing-db.firebaseio.com",
    projectId: "cclothing-db",
    storageBucket: "",
    messagingSenderId: "20703698523",
    appId: "1:20703698523:web:6bd1a2b06033a5fde1a97e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;