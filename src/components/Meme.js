import React from "react";
import memesData from "../memesData";

export default function Meme() {
    function getMemeImage() {
        const memeArrays = memesData.data.memes
        const randomNum = Math.floor(Math.random()*memeArrays.length)
        const url = memeArrays[randomNum].url
        console.log(url)
    }
    return (
        <main className='generatorForm'>
            <div>
                <input type="text" placeholder='Top text'/>
                <input type="text" placeholder='Bottom text'/>
                <button onClick={getMemeImage}>Get a new meme image <img src='/images/photoicon.png'/></button>
            </div>
        </main>
    )
}
