import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwMFJ1JV6SV9FqR5wnCwPo0XB7LWJLD0s",
    authDomain: "king-db-4e5b4.firebaseapp.com",
    projectId: "king-db-4e5b4",
    storageBucket: "king-db-4e5b4.appspot.com",
    messagingSenderId: "184008675954",
    appId: "1:184008675954:web:bb0876e36f7baef77a28eb"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Google Sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//Google Sign in End

export default firebase
