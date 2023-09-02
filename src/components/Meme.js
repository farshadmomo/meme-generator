export default function Meme() {
    return (
        <main className='generatorForm'>
            <form>
                <input type="text" placeholder='Top text'/>
                <input type="text" placeholder='Bottom text'/>
                <button>Get a new meme image <img src='/images/photoicon.png'/></button>
            </form>
        </main>
    )
}
