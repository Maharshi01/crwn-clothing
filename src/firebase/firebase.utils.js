import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
        apiKey: "AIzaSyDV_znVxJ6DUIm5njRKUNNMvaPdWrmLtA0",
        authDomain: "crwn-db-23391.firebaseapp.com",
        databaseURL: "https://crwn-db-23391.firebaseio.com",
        projectId: "crwn-db-23391",
        storageBucket: "crwn-db-23391.appspot.com",
        messagingSenderId: "523030722354",
        appId: "1:523030722354:web:c894d7aaebdc764dfe892b",
        measurementId: "G-1Z3WKHSWSL"
};

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
