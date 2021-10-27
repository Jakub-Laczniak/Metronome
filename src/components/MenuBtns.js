import React from 'react';

function MenuBtns({click, counter, handleChange}) {

    const handleClick = (e) => {
        click(e);
    };

    return (
        <article className='menu_container'>
            <div className='menu_btns'>
                <p className='btn_big' onClick={()=>handleClick(-5)}>-5</p>
                <p className='btn_small' onClick={()=>handleClick(-1)}>-1</p>
            </div>
            <div className='menu_counter'>
                <input type='number' className='counter' value={counter} onChange={handleChange}/>
                <span className='line'/>
                <h2>bpm</h2>
            </div>
            <div className='menu_btns'>
                <p className='btn_small' onClick={()=>handleClick(1)}>+1</p>
                <p className='btn_big' onClick={()=>handleClick(5)}>+5</p>
            </div>
        </article>
    )
}

export default MenuBtns;
