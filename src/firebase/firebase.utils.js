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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    //checking if there is an axisting user in the auth database 
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  //adding shop data to firebase
  export const addCollectionsAndDocuments = async (collectionKey,objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef)
    //send the requests
    const batch = firestore.batch();
    //for each obj, create a new document
    objectsToAdd.forEach(obj =>{
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj)
    });
    return await batch.commit();
  }

  export const convertCollectionSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc =>{
      const {title,items} = doc.data();
      return {
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items,
      }
    });
    console.log(transformedCollection)

    return transformedCollection.reduce((accumulator,collection)=> {
       accumulator[collection.title.toLowerCase()] = collection;
       return accumulator;
    },{})
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;