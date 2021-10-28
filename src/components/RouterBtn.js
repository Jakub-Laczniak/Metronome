import React from 'react'

function RouterBtn({text, classTarget, handleClick, classActive, id}) {
    return (
        <div className={`router_btn ${classActive}`} onClick={(e) => handleClick(e)}>
            <div className={classTarget}/>{text}
        </div>
    )
}

export default RouterBtn
