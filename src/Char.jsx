import "./Char.css"
import logo from "./assets/picture/logo.png"
import char from "./assets/picture/char.jpg"

function Char(){
    return(<>
        <div className="BG">
            <div className="navbar">
                <a href="/"><img src={logo} alt="Logo"/></a>
                <div className="search-nav">
                    <input type="text" placeholder="Search" className="search-bar"/>
                </div>
            </div>
            <div className="main-content">
                <div className="intro">
                    <h1>Bubbles</h1>
                    <h2>Powerpuff Girl</h2>
                </div>
                <img src={char} alt="character"/>
            </div>
            <div className="desc">
                <div>
                    <h2>Appearance</h2>
                    <p>Bubbles is portrayed as having blonde hair in two pigtails and a neat, curved fashion and sky-blue eyes. Her dresses are sky blue with a black-centered stripe, white tights and black mary jane shoes. The Ending Theme refers to her as "the joy and laughter," meaning that she is defined as very sweet. In Meet Fuzzy Lumpkins short when she was hit from Fuzzy's meat gun, one of her pigtails turned into a chicken drumstick.</p>
                </div>
                <div>
                    <h2>Personality</h2>
                    <p>Bubbles, known as the "Joy and the Laughter" of the Powerpuff Girls, is sweet, sensitive, and has a high-pitched voice. Often seen as naive or ditzy, her caring nature and bubbly personality make her popular among friends. However, she can become fiercely independent and even aggressive when provoked, as shown in Bubblevicious, where she famously defeated Mojo Jojo in a fit of rage.</p>
                </div>
            </div>
        </div>
    </>)
}

export default Char;