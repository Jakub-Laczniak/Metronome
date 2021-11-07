import React, { useState, useEffect } from 'react';

function Metrum({ metrum, handleMetrum }) {
    const [A, setA] = useState(true);
    const [B, setB] = useState(false);
    const [C, setC] = useState(false);

    useEffect(() => {
        setA(false);
        setB(false);
        setC(false);
        if (metrum==='A'){
            setA(true);
        };
        if (metrum==='B'){
            setB(true);
        };
        if (metrum==='C'){
            setC(true);
        };
    }, [metrum]);

    const handleClick = (e) => {
        handleMetrum(e);
        switch (e) {
            case "a":
            setA(true);
                break;
            case "b":
            setB(true);
                break;
            case "c":
            setC(true);
                break;
        }
    }

    return (
        <article className='control_container'>
            <div className='metrum_btns'>
                <p className='btn_metrum' onClick={()=>handleClick('a')}>off<span className={A?'circle off active':'circle off'}/></p>
                <p className='btn_metrum' onClick={()=>handleClick('b')}>3/4<span className={B?'circle active':'circle'}/></p>
                <p className='btn_metrum' onClick={()=>handleClick('c')}>2/4<span className={C?'circle active':'circle'}/></p>
            </div>
        </article>
    )
}

export default Metrum
