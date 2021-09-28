import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAKRGxngY10TpFEvMsp0KmFFz-RSn1QqeM",
  authDomain: "letsride-3f248.firebaseapp.com",
  projectId: "letsride-3f248",
  storageBucket: "letsride-3f248.appspot.com",
  messagingSenderId: "878249312218",
  appId: "1:878249312218:web:c33a1547fcf5103c518ae3"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

