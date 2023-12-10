import React from "react";
import s from "./Music.module.css"
import ReactAudioPlayer from "react-audio-player";

const Song = (props) => {

    return (
        <div className={s.song}>KoptjieSA - Where I Belong (Original Mix)</div>
    )
}

const Music = (props) => {
    
    let MusicButton = () => { alert('Download Music') }
    let MusicUpload = () => { alert('Upload Music') }

    
    return (
        <div className={s.musicBox}>
            <div className={s.musics}><h3>My Music</h3></div>
            <div>PlayList</div>
            <div className="songs">
                <div className="songItem">
                    <Song />
                </div>
            </div>
           
           <div className={s.audioPlayer} ><ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
            />
            </div>
            
            <div><button onClick={MusicButton} className="musicDownload">Download</button>
                <button onClick={MusicUpload} className="musicUpload">Upload</button></div>
        </div>
    )
}

export default Music