import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Speeding({handleSpeed}) {

    const [quant, setQuant] = useState(0);
    const [time, setTime] = useState(5);

    const handleQuant = (e) => {
        setQuant((prev)=>prev+e)
    };

    const handleTime = (e) => {
        setTime((prev)=>prev+e)
    };

    useEffect(() => {
        if (quant < 0) {
            setQuant(0);
        };
        if (time < 0) {
            setTime(0);
        };
    }, [quant, time])

    
    return (
    <article className='quant_container'>
        <Link to='/'>
                <div className='quant_icon_confirm' onClick={()=>handleSpeed(quant, time)}></div>
        </Link>
        <div className='quant_btns'>
            <p className='quant_btn' onClick={()=>handleQuant(-1)}>-1</p>
            <p className='quant_btn' onClick={()=>handleTime(-1)}>-1</p>
        </div>
        <div className='menu_counter'>
            <h3 className='quant_counter'>
                {quant}<span className='quant_span'>bpm</span>
            </h3>
            <span className='line'/>
            <h3 className='quant_counter'>
                {time}<span className='quant_span'>sec</span>
            </h3>
        </div>
        <div className='quant_btns'>
            <p className='quant_btn' onClick={()=>handleQuant(1)}>+1</p>
            <p className='quant_btn' onClick={()=>handleTime(1)}>+1</p>
        </div>
        <Link to='/'>
            <div className='quant_icon_back'></div>
        </Link>
    </article>
    )
}

export default Speeding
