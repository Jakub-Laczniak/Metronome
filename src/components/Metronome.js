import React from 'react'
import metronomeWeight from './img/weight.png'
import metronomeSign from './img/sign.png'

function Metronome() {
    return (
        <div className='container'>
            <div className='metronome_body'> 
                <div className='metronome_sign' style={{animationDuration: '5s'}}>
                    <div className='metronome_weight'/>
                </div>
            </div>
        </div>
    )
}

export default Metronome
