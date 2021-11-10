import React, { useState } from 'react'

function SingleSong({ name, author, url, urlText }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prev)=>!prev);
    };

        if (clicked) {
            return (
                <div className='single_song_container clicked' onClick={handleClick}>
                    <div>
                        <p>title:</p>
                        <h4>{name}</h4>
                    </div>
                    <div>
                        <p>author:</p>
                        <h4>{author}</h4>
                    </div>
                    <div>
                        <p>URL:</p>
                        <a href={url}><h4>{urlText}</h4></a>
                    </div>
                </div>
        )} else {
            return (
                <div className='single_song_container' onClick={handleClick}>
                    <h4 className='main_title'>{name}</h4>
                </div>
        )};
};

export default SingleSong
