import firebase from 'firebase'
import   'firebase/storage'
// import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBSXm6-GmAftMXKFIi4cU3JLnpeBjI_eVI",
    authDomain: "myproject-bb84e.firebaseapp.com",
    databaseURL: "https://myproject-bb84e.firebaseio.com",
    projectId: "myproject-bb84e",
    storageBucket: "gs://myproject-bb84e.appspot.com",
    messagingSenderId: "3958394199"

};
 const firebaseApp  = firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots:true})

 export default firebaseApp.firestore()



const fb = firebase.firestore();

export {fb}
