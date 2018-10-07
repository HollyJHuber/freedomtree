import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBp71CRQn7dppg_BJZJ9BF1vuvmLXoyJJE",
  authDomain: "freedomtree-4bc52.firebaseapp.com",
  databaseURL: "https://freedomtree-4bc52.firebaseio.com",
  projectId: "freedomtree-4bc52",
  storageBucket: "freedomtree-4bc52.appspot.com",
  messagingSenderId: "429956210659"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };