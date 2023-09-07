import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAYV3RHRJ-CSW2BftcrTdWxLI7Ayp23uE0",
      authDomain: "to-do-cp-6e40f.firebaseapp.com",
      projectId: "to-do-cp-6e40f",
      storageBucket: "to-do-cp-6e40f.appspot.com",
      messagingSenderId: "905893106625",
      appId: "1:905893106625:web:c388a669232c2cfced9540",
      measurementId: "G-WYQ0DEBQ9Z"

  }); 

  const db = firebaseApp.fireStore();


  export default db;