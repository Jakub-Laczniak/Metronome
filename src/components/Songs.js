import React from 'react'
import SingleSong from './SingleSong'
import data from '../songs.json';

function Songs() {

    const handleSubmit = (e) => {
        console.log('test');
        e.preventDefault();
        console.log(e.value);
    };

    return (
        <article className='control_songs_container'>
            <div className='songs_container'>
                {data.map((song)=>{
                    return (
                        <SingleSong name={song.name} author={song.author} url={song.url} urlText={song.urlText} clicked={song.clicked}/>
                    )
                })}
            </div>
            <form className='new_song_form' onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' placeholder="song's title"></input>
                    <input type='text' placeholder="author's name"></input>
                    <input type='text' placeholder="url"></input>
                    <button type='submit'>add song</button>
            </form>
        </article>
    )
}

export default Songs
