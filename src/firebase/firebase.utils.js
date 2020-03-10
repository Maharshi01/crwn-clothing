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


export const createUserProfileDocument = async (userAuth, additionalData)=>{
if (!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get();
if(!snapShot.exists){
        const {displayName, email} =userAuth;
        const createdAt = new Date()
        try{
                await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                })
        }
        catch(error){
                console.log("Error Message",error.message)
        }
}
return userRef;
}

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
