import React, { useState, useEffect } from 'react'
import SingleSong from './SingleSong'
import firebase from '../utils/firebase';

function Songs() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');
    const [songs, setSongs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        setAuthor('');
        setUrl('');
        const songRef = firebase.database().ref('songs');
        const song = {title, author, url};
        songRef.push(song);
    };

    useEffect(() => {
        const data = firebase.database().ref('songs');
        data.on('value', (snapshot) => {
            const songs = snapshot.val();
            const songsList = [];
            for (let id in songs) {
                songsList.push({ id, ...songs[id] })
            };
            setSongs(songsList);
        });
    }, []);

    console.log(songs);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleAuthor = (e) => {
        setAuthor(e.target.value);
    };
    const handleUrl = (e) => {
        setUrl(e.target.value);
    };

    return (
        <article className='control_songs_container'>
            <div className='songs_container'>
                {songs.map((song)=>{
                    return (
                        <SingleSong name={song.title} author={song.author} url={song.url} id={song.id}/>
                    )
                })}
            </div>
            <form className='new_song_form' onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' placeholder="song's title" onChange={(e) => handleTitle(e)} value={title} required/>
                    <input type='text' placeholder="author's name" onChange={(e) => handleAuthor(e)} value={author} required/>
                    <input type='text' placeholder="url" onChange={(e) => handleUrl(e)} value={url} required/>
                    <button type='submit'>add song</button>
            </form>
        </article>
    )
}

export default Songs
