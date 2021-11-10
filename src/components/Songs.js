import React from 'react'
import SingleSong from './SingleSong'
import data from '../songs.json';

function Songs() {

    return (
        <article className='control_container'>
            <div className='songs_container'>
                {data.map((song)=>{
                    return (
                        <SingleSong name={song.name} author={song.author} url={song.url} urlText={song.urlText} clicked={song.clicked}/>
                    )
                })}
                <SingleSong name={'+'}/>
            </div>
        </article>
    )
}

export default Songs
