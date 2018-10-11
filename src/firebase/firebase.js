import firebase from 'firebase/app';
import 'firebase/database';

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

//temp code to use to create databases in Firebase
/*
const list = [
{ id: 100, notation: "Discrimination", icon: "fas fa-users", content: "Discrimination"},
{ id: 101, notation: "Bullying", icon: "fas fa-child", content: "Bullying"},
{ id: 102, notation: "Sexual Harassment", icon: "fas fa-hand-rock", content: "Sexual Harassment"},
{ id: 103, notation: "LGBTQ", icon: "fas fa-transgender-alt", content: "LGBTQ"},
{ id: 104, notation: "Religion", icon: "fas fa-place-of-worship", content: "Religion"},
{ id: 105, notation: "Speech/Press", icon: "fas fa-newspaper", content: "Speech"},
{ id: 106, notation: "Protest/Assembly/Petition", icon: "fas fa-bullhorn", content: "Protest/Assembly"},
{ id: 107, notation: "Disability", icon: "fab fa-accessible-icon", content: "Disability"},
{ id: 109, notation: "Police", icon: "fas fa-exclamation-triangle", content: "Police"},
{ id: 110, notation: "Emergency", icon: "fas fa-ambulance", content: "Emergency (Call 911)" },
{ id: 111, notation: "Other Issue", icon: "fas fa-question", content: "Other"}
];

const listData = {};
list.forEach(({id, notation, icon, content}) => {
  listData[id] = {id, notation, icon, content};
});
 database.ref('tests').set(listData);
*/

// temp code to ensure firebase is hooked up!
/*
database.ref('whats')
.once('value')
.then((snapshot) => {
  const items = []; // create a new array
  let list = [];
  let dropdown = [];
  let query = [];
  snapshot.forEach((childSnapshot) => { // iterate over each object in snapshot
    items.push({ // push the objects to the array
     id: childSnapshot.key, // set id
      ...childSnapshot.val() // spread out whatever other data is in the object
    });
  });
    console.log(items); // let's see what our transformed data looks like

   items.map((item) => {
      let type = item.id;
      console.log(type);
      delete item.id;
      if (type === "list"){
        list = Object.keys(item).map(key => item[key]);
        console.log(list);
      } else if (type === "dropdown"){
        dropdown =  Object.keys(item).map(key => item[key]);
        console.log(dropdown);
      } else {
        query = Object.keys(item).map(key => item[key]);
        console.log(query);
      }
    });
});
*/


export { firebase, database as default };