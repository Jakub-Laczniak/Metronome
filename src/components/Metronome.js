import React, {useState, useEffect} from 'react';
import start from '../img/start.png';
import stop from '../img/stop.png';
import '../styles/variables.scss';
import Menu from './Menu';
import {Howl} from 'howler';
import mainAudio from '../sound/main.mp3';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Metronome() {
    const [isRunning, setIsRunning] = useState(false);
    const [BPM, setBPM] = useState(60);
    const [quant, setQuant] = useState(0);
    const [speedTime, setSpeedTime] = useState(0);
    const [isSpeeding, setIsSpeeding] = useState(false);

    const mainSound = new Howl({
        src: mainAudio
    });
    
    let time = 1/(BPM/60)*2;
    let intervalTime = time/2*1000;
    let speedTimeInterval = speedTime*intervalTime*2;

    let animationPending = {
        animationDuration: time+'s', 
        animationName: 'pend_animation',
    };

    useEffect(() => {
        let soundInterval;
        mainSound.play();
        if (isRunning) {
            soundInterval = setInterval(()=>{
                mainSound.play();
            },intervalTime);
        }
        return () => {
            clearInterval(soundInterval);
        }
    }, [isRunning]);

    useEffect(() => {
        let speedInterval;
        if(isSpeeding && quant > 0){
            speedInterval = setInterval(() => {
                setBPM((prev)=>prev+quant)
            }, speedTimeInterval);
        }
        return () => {
            clearInterval(speedInterval);
        }
    }, [isSpeeding])

    useEffect(() => {
        console.log(speedTimeInterval);
        console.log(animationPending.animationDuration);
    });

    const handleClick = () => {
        setIsRunning((prev)=>!prev);
        setIsSpeeding((prev)=>!prev);
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

    const handleSpeed = (quant, time) => {
        setQuant(quant);
        setSpeedTime(time);
    };

    return (
        <Router>
        <React.Fragment>
            <div className='metronome_body'>
                <div className='metronome_pend' style={isRunning?animationPending:null}>
                    <div className='metronome_weight'/>
                </div>
                <div className='metronome_btn' style={{backgroundImage: `url(${isRunning?stop:start})`}} onClick={handleClick}/>
            </div>
            <Menu counter={BPM} handleClick={handleInterval} handleChange={handleChange} handleSpeed={handleSpeed}/>
        </React.Fragment>
        </Router>
    )
}

export default Metronome;
