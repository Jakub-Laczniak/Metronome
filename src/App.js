import React from 'react'
import Metronome from './components/Metronome';
import './styles/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAtCGeBcUIxzIdd__67f3dJQeZoUm4GHIY",
//   authDomain: "metronome-f2105.firebaseapp.com",
//   projectId: "metronome-f2105",
//   storageBucket: "metronome-f2105.appspot.com",
//   messagingSenderId: "848638707701",
//   appId: "1:848638707701:web:e141f0d257733a643602bc",
//   measurementId: "G-Q84LB4F2XE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <main className='main_container'>
        <Metronome/>
      </main>
    </Router>
  )
}

export default App
