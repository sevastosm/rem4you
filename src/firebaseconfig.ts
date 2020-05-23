import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBcXyqmyNYIJJgt5uJIiom5_RiY7xfjpyY",
  authDomain: "reservations-e83b7.firebaseapp.com",
  databaseURL: "https://reservations-e83b7.firebaseio.com",
  projectId: "reservations-e83b7",
  storageBucket: "reservations-e83b7.appspot.com",
  messagingSenderId: "862001867372",
  appId: "1:862001867372:web:45893140e43a7ba321c649",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export const dbUsers = fireDb.database().ref("users/")
export default fireDb.database().ref()
