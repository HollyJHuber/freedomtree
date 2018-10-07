import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

// temp code to ensure firebase is hooked up!
database.ref('expenses')
.once('value')
.then((snapshot) => {
  const expenses = []; // create a new array
  snapshot.forEach((childSnapshot) => { // iterate over each object in snapshot
    expenses.push({ // push the objects to the expenses array
      id: childSnapshot.key, // set id to the auto-generated unique id (here's how we get it)
      ...childSnapshot.val() // spread out whatever other data is in the object
    });
  });
    console.log(expenses); // let's see what our transformed data looks like
});

export { firebase, database as default };