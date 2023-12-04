import React from "react";
import s from "./Music.module.css"
import ReactAudioPlayer from "react-audio-player";

const Song = (props) => {

    return (
        <div className={s.song}>KoptjieSA - Where I Belong (Original Mix)</div>
    )
}

const Music = (props) => {

    return (
        <div className={s.musicBox}>
            <div className={s.musics}>My Music</div>
            <div>PlayList</div>
            <div className="songs">
                <div className="songItem">
                    <Song />
                </div>
            </div>
            <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
            />
            <div><button className="musicDownload">Download</button>
                <button className="musicUpload">Upload</button></div>
        </div>
    )
}

export default Music