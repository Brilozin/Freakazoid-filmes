import './Main.css'
import { useState } from 'react'
import Catalogo from './catalogo/catalogo'

function Main() {
    return (
        <main className="main">
            <h1>Filmes em destaque</h1>

            <div className="filmes">

                <div className="filme">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.zdveHEFRnxfxM9BU784xxgHaK4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Kachau!" />
                    <h2>Ktchau!</h2>
                    <p>2006</p>
                    <a href="https://www.youtube.com/results?search_query=Ktchau+filme+2006" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

                <div className="filme">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Chicken_Little_%28Disney%29.jpg/250px-Chicken_Little_%28Disney%29.jpg" alt="O Galinho Chicken Little" />
                    <h2>O Galinho Chicken Little</h2>
                    <p>2005</p>
                    <a href="https://www.youtube.com/results?search_query=O+Galinho+Chicken+Little+filme" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

                <div className="filme">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjAxMjU4YjEtZGEyZC00ZDg1LWJiMDItNDBhY2Y3YjRjZTBiXkEyXkFqcGc@._V1_.jpg" alt="Gigantes de aço" />
                    <h2>Gigantes de aço</h2>
                    <p>2011</p>
                    <a href="https://www.youtube.com/results?search_query=Gigantes+de+a%C3%A7o+filme" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

                <div className="filme">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/9/94/Superhero_P%C3%B4ster.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original" alt="Super-Herói - O Filme" />
                    <h2>Super-Herói - O Filme</h2>
                    <p>2008</p>
                    <a href="https://www.youtube.com/results?search_query=Super-Her%C3%B3i+O+Filme+2008" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

                <div className="filme">
                    <img src="https://i.pinimg.com/originals/76/ff/5a/76ff5adef0bd759ce2a803bb2663ed01.jpg" alt="Deu a Louca na Chapeuzinho Vermelho" />
                    <h2>Deu a Louca na Chapeuzinho Vermelho</h2>
                    <p>2005</p>
                    <a href="https://www.youtube.com/results?search_query=Deu+a+Louca+na+Chapeuzinho+Vermelho" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

                <div className="filme">
                    <img src="https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/00/1100514_ta-dando-onda-filme-infantil-ms_z1_637382952582236308.jpg" alt="Tá Dando Onda" />
                    <h2>Tá Dando Onda</h2>
                    <p>2007</p>
                    <a href="https://www.youtube.com/results?search_query=Ta+Dando+Onda+filme" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

                <div className="filme">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy5F_QLDWTUSj8jf0ME7Ime6ONCxqgDLzj8ahjOguNg&s=10" alt="As Branquelas" />
                    <h2>As Branquelas</h2>
                    <p>2004</p>
                    <a href="https://www.youtube.com/results?search_query=As+Branquelas+filme+2004" target="_blank" rel="noreferrer">
                        <button>Assistir</button>
                    </a>
                </div>

            </div>
        </main>
    )
}

export default Main