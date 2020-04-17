import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBILb5x8aluKyaSdqUay-RrJMyYG-8SE94",
    authDomain: "e-shop-6cf4f.firebaseapp.com",
    databaseURL: "https://e-shop-6cf4f.firebaseio.com",
    projectId: "e-shop-6cf4f",
    storageBucket: "e-shop-6cf4f.appspot.com",
    messagingSenderId: "1009340445795",
    appId: "1:1009340445795:web:c23c3e835692202cddb456",
    measurementId: "G-LJ2VQL287P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;