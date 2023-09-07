import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [memeImage,setMemeImage] = React.useState()
    function getMemeImage() {
        const memeArrays = memesData.data.memes
        const randomNum = Math.floor(Math.random()*memeArrays.length)
        setMemeImage(memeArrays[randomNum].url)
    }
    return (
        <main className='generatorForm'>
                <div>
                    <input type="text" placeholder='Top text'/>
                    <input type="text" placeholder='Bottom text'/>
                    <button onClick={getMemeImage}>Get a new meme image <img src='/images/photoicon.png' alt='button icon'/></button>
                </div>
            <img className='memeImages' src={memeImage} alt='memes'/>
        </main>
    )
}
