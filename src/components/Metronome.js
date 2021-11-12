import React, { useState, useEffect } from 'react';
import start from '../img/start.png';
import stop from '../img/stop.png';
import '../styles/variables.scss';
import { Howl } from 'howler';
import mainAudio from '../sound/main.mp3';
import sideAudio from '../sound/side.mp3'
import PendWeight from './PendWeight';
import Menu from './Menu';

function Metronome() {
    const [isRunning, setIsRunning] = useState(false);
    const [BPM, setBPM] = useState(60);
    const [animationPending, setAnimationPending] = useState({});
    const [time, setTime] = useState(1/(BPM/60)*2);
    const [intervalTime, setIntervalTime] = useState(time/2*1000);
    const [metrum, setMetrum] = useState('A');
    const [metrumTime, setMetrumTime] = useState(0);
    const [metrumPause, setMetrumPause] = useState(0);
    const [warning, setWarning] = useState(false);

    const mainSound = new Howl({
        src: mainAudio,
    });

    const sideSound = new Howl({
        src: sideAudio,
    });
    
    useEffect(()=>{
        setTime(1/(BPM/60)*2);
        let timer = setTimeout(()=>{
            if (BPM < 30) {
                setBPM(30);
                setWarning(false);
            };
            if (BPM > 208) {
                setBPM(208);
                setWarning(false);
            };
        },1500);
        if (BPM >= 30 && BPM <= 208) {
            clearTimeout(timer);
            setWarning(false);
        };
        if (BPM < 30 || BPM > 208) {
            setWarning(true);
        };
        
        return () => {
            clearTimeout(timer);
        };
    },[BPM]);

    useEffect(()=>{
        setAnimationPending({
            animationDuration: time+'s', 
            animationName: 'pend_animation',
        });
        setIntervalTime(time/2*1000);
    },[time]);

    useEffect(() => {
        setMetrumTime(intervalTime/3);
        switch (metrum) {
            case "A":
            setMetrumTime(0);
                break;
            case "B":
                setMetrumTime(intervalTime/3);
                break;
            case "C":
                setMetrumTime(intervalTime/2);
                break;
        }
    }, [intervalTime, metrum]);

    useEffect(() => {
        let soundInterval;
        let metrumInterval;

        setAnimationPending({
            animationDuration: time+'s', 
            animationName: 'pend_animation',
        });
        if (isRunning) {
            soundInterval = setInterval(()=>{
                mainSound.play();
            },intervalTime);
        };
        if (isRunning && metrumTime>0) {
            metrumInterval = setInterval(()=>{
                setMetrumPause((prev)=>prev+1);
            },metrumTime);
        };
        return () => {
            clearInterval(soundInterval);
            clearInterval(metrumInterval);
        }
    }, [isRunning, time]);

    useEffect(() => {
        if (metrum === 'B'){
            if (metrumPause%3!==0){
                sideSound.play();
            };
        } else if (metrum === 'C'){
            if (metrumPause%2!==0){
                sideSound.play();
            };
        }
    }, [metrumPause, metrum])

    const handleClick = () => {
        setIsRunning((prev)=>!prev);
        setMetrumPause(0);
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

    const handleMetrum = (e) => {
        switch (e) {
            case "a":
            setMetrum('A');
                break;
            case "b":
            setMetrum('B');
                break;
            case "c":
            setMetrum('C');
                break;
        }
    };

    return (
        <>
            <div className='metronome_body'>
                <div className='metronome_pend' style={isRunning?animationPending:null}>
                    <PendWeight BPM = {BPM}/>
                </div>
                <div className='metronome_btn' style={{backgroundImage: `url(${isRunning?stop:start})`}} onClick={handleClick}/>
            </div>
            <Menu counter={BPM} handleClick={handleInterval} handleChange={handleChange} metrumProp={metrum} handleMetrum={handleMetrum} warning={warning}/>
        </>
    )
}

export default Metronome;
