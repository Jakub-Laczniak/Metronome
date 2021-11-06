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
    const [animationPending, setAnimationPending] = useState({});
    const [time, setTime] = useState((1/(BPM/60)*2).toFixed(2));
    const [intervalTime, setIntervalTime] = useState(time/2*1000);
    const [speedTimeInterval, setSpeedTimeInterval] = useState(Math.floor(speedTime/time)*time*1000);

    const mainSound = new Howl({
        src: mainAudio,
    });
    
    let time = 1/(BPM/60)*2; // oznacza dwa interwały, czyli 100% animacji. Oznacza czas trwania animacji
    let intervalTime = time/2*1000; // oznacza jeden interwał, czyli 50% animacji. obsługuje dźwięk
    let howMany = Math.round(speedTime/time); /// ile razy 100% animacji mieści się w czasie przeznaczonym na podwyższenie tempa
    let speedTimeInterval = howMany * time * 1000;

    useEffect(()=>{
        setTime((1/(BPM/60)*2).toFixed(2));
        console.log('time: ',time, 'animation pending: ', animationPending, 'interval time: ', intervalTime, 'speed time: ', speedTime,'speed time interval: ', speedTimeInterval);
    },[BPM]);

    useEffect(()=>{
        setAnimationPending({
            animationDuration: time+'s', 
            animationName: 'pend_animation',
        });
        setIntervalTime(time/2*1000);
        setSpeedTimeInterval((speedTime/time).toFixed(0)*time*1000);
    },[time]);

    useEffect(() => {
        let soundInterval;
        mainSound.play();
        setAnimationPending({
            animationDuration: time+'s', 
            animationName: 'pend_animation',
        });
        if (isRunning) {
            soundInterval = setInterval(()=>{
                mainSound.play();
            },intervalTime);
        }
        return () => {
            clearInterval(soundInterval);
        }
    }, [isRunning, time]);

    useEffect(() => {
        let speedInterval;
        if(isSpeeding && quant > 0){
            speedInterval = setInterval(() => {
                setBPM((prev)=>prev+quant);
            }, speedTimeInterval);
        }
        return () => {
            clearInterval(speedInterval);
        }
    }, [isSpeeding]);

    const handleClick = () => {
        setIsRunning((prev)=>!prev);
        setIsSpeeding((prev)=>!prev);
    };

    document.body.onkeypress = function (e) {
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
        let num = Number(e.target.value);
        setBPM(num);
    };

    const handleSpeed = (quant, time) => {
        setQuant(quant);
        setSpeedTime(time);
    };

    return (
        <Router>
            <div className='metronome_body' onKeyDown={(e)=>console.log(e)}>
                <div className='metronome_pend' style={isRunning?animationPending:null}>
                    <div className='metronome_weight'/>
                </div>
                <div className='metronome_btn' style={{backgroundImage: `url(${isRunning?stop:start})`}} onClick={handleClick}/>
            </div>
            <Menu counter={BPM} handleClick={handleInterval} handleChange={handleChange} handleSpeed={handleSpeed} quant={quant} time={speedTime}/>
        </Router>
    )
}

export default Metronome;
