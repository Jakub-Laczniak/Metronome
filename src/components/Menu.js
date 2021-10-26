import React, {useState} from 'react'

function Menu({isSpeeding, counter, click}) {

    const handleClick = (e) => {
        click(e);
    };

    return (
        <div className='menu_container'>
            <div className='menu_btns'>
                <p className='btn_big' onClick={()=>handleClick(-5)}>-5</p>
                <p className='btn_small' onClick={()=>handleClick(-1)}>-1</p>
            </div>
            <div className='menu_counter'>
                <h1>{counter}</h1>
                <span className='line'/>
                <h2>bpm</h2>
            </div>
            <div className='menu_btns'>
                <p className='btn_small' onClick={()=>handleClick(1)}>+1</p>
                <p className='btn_big' onClick={()=>handleClick(5)}>+5</p>
            </div>
        </div>
    )
}

export default Menu
