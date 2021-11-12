import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtCGeBcUIxzIdd__67f3dJQeZoUm4GHIY",
  authDomain: "metronome-f2105.firebaseapp.com",
  databaseURL: "https://metronome-f2105-default-rtdb.firebaseio.com",
  projectId: "metronome-f2105",
  storageBucket: "metronome-f2105.appspot.com",
  messagingSenderId: "848638707701",
  appId: "1:848638707701:web:e141f0d257733a643602bc",
  measurementId: "G-Q84LB4F2XE"
};

firebase.initializeApp(firebaseConfig)

export default firebase;