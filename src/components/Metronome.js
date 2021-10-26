import React, {useState, useEffect, useRef} from 'react';
import start from '../img/start.png';
import stop from '../img/stop.png';
import '../styles/variables.scss';
import Menu from './Menu';

function Metronome() {
    const [isRunning, setIsRunning] = useState(false);
    const [interval, setInterval] = useState(120);

    let intervalHandler = interval*0.0167
    let animationPending = {
        animationDuration: intervalHandler*2 + 's', 
        animationName: 'pend_animation',
    };

    useEffect(() => {
        console.log(interval);
        console.log(animationPending);
        animationPending.animationDuration = interval*60 + 's';
    }, [interval])

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
        setInterval((prev) => prev + e);
    };

    return (
        <React.Fragment>
            <div className='metronome_body'>
                <div className='metronome_pend' style={isRunning?animationPending:null}>
                    <div className='metronome_weight'/>
                </div>
                <div className='metronome_btn' style={{backgroundImage: `url(${isRunning?stop:start})`}} onClick={handleClick}/>
            </div>
            <Menu counter={interval} click={handleInterval}/>
        </React.Fragment>
    )
}

export default Metronome
