import React, {useState, useEffect} from 'react';
import start from '../img/start.png';
import stop from '../img/stop.png';
import '../styles/variables.scss';
import Menu from './Menu';
import {Howl} from 'howler';
import mainAudio from '../sound/main.mp3'


function Metronome() {
    const [isRunning, setIsRunning] = useState(false);
    const [BPM, setBPM] = useState(60);

    const mainSound = new Howl({
        src: mainAudio
      });

    let time = 1/(BPM/60)*2;
    let intervalTime = time/2*1000;

    let animationPending = {
        animationDuration: time+'s', 
        animationName: 'pend_animation',
    };

    useEffect(() => {
        let soundInterval;
        if (isRunning) {
            soundInterval = setInterval(()=>{
                mainSound.play();
            },intervalTime);
        }
        return () => {
            clearInterval(soundInterval)
        }
    }, [isRunning]);

    useEffect(() => {
        animationPending.animationDuration = time + 's';
    }, [BPM]);

    const handleClick = () => {
        setIsRunning((prev)=>!prev);
    };

    document.body.onkeyup = function (e) {
        if(e.keyCode === 32) {
            handleClick();
        };
    };

    const handleInterval = (e) => {
        setIsRunning(false);
        setBPM((prev) => prev + e);
    };

    const handleChange = (e) => {
        setIsRunning(false);
        let num = Number(e.target.value)
        setBPM(num)
    };

    return (
        <React.Fragment>
            <div className='metronome_body'>
                <div className='metronome_pend' style={isRunning?animationPending:null}>
                    <div className='metronome_weight'/>
                </div>
                <div className='metronome_btn' style={{backgroundImage: `url(${isRunning?stop:start})`}} onClick={handleClick}/>
            </div>
            <Menu counter={BPM} handleClick={handleInterval} handleChange={handleChange}/>
        </React.Fragment>
    )
}

export default Metronome;
