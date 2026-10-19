
import './Main.css'

function Main() {
    return (
        <main className="main">
            <h1>Filmes em destaque</h1>

            <div className="filmes">
                <div className="filme">
                    <img src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" alt="Inception" />
                    <h2>Inception</h2>
                    <p>2010</p>
                    <button>Assistir</button>
                </div>

                <div className="filme">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjAxMjU4YjEtZGEyZC00ZDg1LWJiMDItNDBhY2Y3YjRjZTBiXkEyXkFqcGc@._V1_.jpg" alt="Gigantes de aço" />
                    <h2>Gigantes de aço</h2>
                    <p>2011</p>
                    <button>Assistir</button>
                </div>

                <div className="filme">
                    <img src="https://m.media-amazon.com/images/S/pv-target-images/ae8dddd0abc2fac14052f29bc2ae15ddd86374c0d3bd017171ee6473b8933b29.jpg" alt="Batman o cavaleiro das trevas" />
                    <h2>Batman cavaleiros das trevas</h2>
                    <p>2008</p>
                    <button>Assistir</button>

                </div>

                <div className="filme">
                    <img src="https://m.media-amazon.com/images/S/pv-target-images/ae8dddd0abc2fac14052f29bc2ae15ddd86374c0d3bd017171ee6473b8933b29.jpg" alt="" />
                    <h2>Batman cavaleiros das trevas</h2>
                    <p>2008</p>
                    <button>Assistir</button>

                </div>

                <div className="filme">
                    <img src="https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/00/1100514_ta-dando-onda-filme-infantil-ms_z1_637382952582236308.jpg" alt="Ta dando onda" />
                    <h2>Ta dando onda</h2>
                    <p>2007</p>
                    <button>Assistir</button>

                </div>
            </div>
        </main>
    )
}

export default Main
