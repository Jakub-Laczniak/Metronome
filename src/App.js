import React from 'react'
import Metronome from './components/Metronome';
import './styles/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';

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
