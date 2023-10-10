import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme,setMeme] = React.useState([{
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    }])
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    function getMemeImage() {
        const memeArrays = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random()*memeArrays.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeArrays[randomNum].url
        }))
    }
    return (
        <main className='generatorForm'>
                <div className="input-form">
                    <input
                        type="text"
                        name="topText"
                        placeholder='Top text'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Bottom text'
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={getMemeImage}>Get a new meme image <img src='/images/photoicon.png' alt='button icon'/></button>
                </div>
                <div className="meme">
                     <img className='memeImages' src={meme.randomImage} alt='memes'/>
                     <h2 className="meme-text top">{meme.topText}</h2>
                     <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}
