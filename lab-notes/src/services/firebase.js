//Aqui voy a dejar las funciones de firebase y las exporto e importo en login signIn y sign out(?)
import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult, signInWithPopup, signOut } from "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { db } from "./firebaseConfig";
import { getFirestore, collection, addDoc, getDoc, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const redirect = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
};

export const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
};


export const LogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}


