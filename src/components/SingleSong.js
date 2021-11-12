import React, { useState } from 'react'
import firebase from '../utils/firebase';

function SingleSong({ name, author, url, id }) {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prev)=>!prev);
    };

    const handleDelete = (e) => {
        const songRef = firebase.database().ref('songs').child(id);
        songRef.remove();
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
                        <a href={url} target='_blank'><h4>link</h4></a>
                    </div>
                </div>
        )} else {
            return (
                <div className='single_song_container'>
                    <h4 className='main_title' onClick={handleClick}>{name}</h4>
                    <span className='delete' onClick={handleDelete}>X</span>
                </div>
        )};
};

export default SingleSong
