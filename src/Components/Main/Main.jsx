
import './Main.css'
import { useState, useEffect } from 'react'
import Catalogo from '../Catalogo/Catalogo'
import Series from '../Series/Series'

function Main() {
    const [filmeSelecionado, setFilmeSelecionado] = useState(null)
    const [busca, setBusca] = useState('')
    const [mostrarSeries, setMostrarSeries] = useState(false)

    const filmes = [
        {
            titulo: 'Ktchau!',
            ano: 2006,
            duracao: '1h 36min',
            imagem: 'https://tse4.mm.bing.net/th/id/OIP.zdveHEFRnxfxM9BU784xxgHaK4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            descricao: 'Uma aventura divertida cheia de personagens marcantes.'
        },
        {
            titulo: 'O Galinho Chicken Little',
            ano: 2005,
            duracao: '1h 21min',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Chicken_Little_%28Disney%29.jpg/250px-Chicken_Little_%28Disney%29.jpg',
            descricao: 'Chicken Little precisa recuperar a confiança da cidade.'
        },
        {
            titulo: 'Gigantes de Aço',
            ano: 2011,
            duracao: '2h 07min',
            imagem: 'https://cinepop.com.br/wp-content/uploads/2021/08/gigantes-de-aco-poster-300x428.jpg',
            descricao: 'Um ex-boxeador e seu filho treinam um robô para lutar.'
        },
        {
            titulo: 'Super-Herói - O Filme',
            ano: 2008,
            duracao: '1h 25min',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/9/94/Superhero_P%C3%B4ster.jpg',
            descricao: 'Uma comédia sobre histórias de super-heróis.'
        },
        {
            titulo: 'Deu a Louca na Chapeuzinho Vermelho',
            ano: 2005,
            duracao: '1h 20min',
            imagem: 'https://i.pinimg.com/originals/76/ff/5a/76ff5adef0bd759ce2a803bb2663ed01.jpg',
            descricao: 'Uma investigação maluca sobre um conto de fadas.'
        },
        {
            titulo: 'O Espanta Tubarões',
            ano: 2004,
            duracao: '1h 30min',
            imagem: 'https://media.fstatic.com/ek2BaEUzLELPCc0Y8x9kodT-bU0=/322x478/smart/filters:format(webp)/media/movies/covers/2015/04/o-espanta-tubaroes_t1341.jpg',
            descricao: 'Um peixe sonhador deseja ficar famoso.'
        },
        {
            titulo: 'As Branquelas',
            ano: 2004,
            duracao: '1h 49min',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy5F_QLDWTUSj8jf0ME7Ime6ONCxqgDLzj8ahjOguNg&s=10',
            descricao: 'Dois agentes do FBI se disfarçam para investigar um caso.'
        },
        {
            titulo: 'King Kong',
            ano: 2005,
            duracao: '3h',
            imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/95/13/92/20384102.jpg',
            descricao: 'Uma equipe encontra um gorila gigante em uma ilha.'
        },
        {
            titulo: 'Gato de Botas',
            ano: 2011,
            duracao: '1h 30min',
            imagem: 'https://www.papodecinema.com.br/wp-content/uploads/2022/12/20221215-gato-de-botas-papo-de-cinema-cartaz.webp',
            descricao: 'O Gato de Botas embarca em uma aventura.'
        },
        {
            titulo: 'O Espetacular Homem-Aranha',
            ano: 2012,
            duracao: '2h 16min',
            imagem: 'https://www.papodecinema.com.br/wp-content/uploads/2012/07/20181114-oespetacularhomemaranha.webp',
            descricao: 'Peter Parker aprende a lidar com seus poderes.'
        },
        {
            titulo: 'Debi & Lóide 2',
            ano: 2014,
            duracao: '1h 49min',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCRSzyM3yIWq1Dk0-v118q93WXZMog6-izjE9dPhLZg&s=10',
            descricao: 'Harry descobre que tem uma filha e parte em uma nova aventura com Lloyd.'
        },
        {
            titulo: 'Clube da Luta',
            ano: 1999,
            duracao: '2h 19min',
            imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg',
            descricao: 'Os dois amigos embarcam em mais uma aventura maluca.'
        }
    ]

    useEffect(() => {
        function receberBusca(evento) {
            setBusca(evento.detail)
            setFilmeSelecionado(null)
            setMostrarSeries(false)

            document.getElementById('filmes')?.scrollIntoView({
                behavior: 'smooth'
            })
        }

        function abrirSeries() {
            setMostrarSeries(true)
            setFilmeSelecionado(null)
            setBusca('')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        function abrirInicio() {
            setMostrarSeries(false)
            setFilmeSelecionado(null)
            setBusca('')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        function abrirFilmes() {
            setMostrarSeries(false)
            setFilmeSelecionado(null)
            window.setTimeout(() => {
                document.getElementById('filmes')?.scrollIntoView({
                    behavior: 'smooth'
                })
            }, 0)
        }

        window.addEventListener('buscar-filmes', receberBusca)
        window.addEventListener('abrir-series', abrirSeries)
        window.addEventListener('abrir-inicio', abrirInicio)
        window.addEventListener('abrir-filmes', abrirFilmes)

        return () => {
            window.removeEventListener('buscar-filmes', receberBusca)
            window.removeEventListener('abrir-series', abrirSeries)
            window.removeEventListener('abrir-inicio', abrirInicio)
            window.removeEventListener('abrir-filmes', abrirFilmes)
        }
    }, [])

    const filmesFiltrados = filmes.filter((filme) =>
        filme.titulo.toLowerCase().includes(busca.toLowerCase())
    )

    if (mostrarSeries) {
        return (
            <Series
                voltar={() => {
                    setMostrarSeries(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
            />
        )
    }

    if (filmeSelecionado) {
        return (
            <Catalogo
                filme={filmeSelecionado}
                voltar={() => setFilmeSelecionado(null)}
            />
        )
    }

    return (
        <main className="main" id="inicio">
            <section className="destaque-main">
                <span className="etiqueta-main">FREAKAZOID FILMES</span>

                <h1>
                    Grandes filmes.
                    <br />
                    <span>Grandes histórias.</span>
                </h1>

                <p className="subtitulo-main">
                    Sua próxima sessão começa aqui.
                    Escolha seu filme favorito!
                </p>

                <a href="#filmes" className="botao-explorar">
                    Explorar catálogo ↓
                </a>
            </section>

            <section className="secao-filmes" id="filmes">
                <div className="titulo-secao">
                    <div>
                        <h2>Filmes em destaque</h2>
                        <p>Histórias que merecem ser assistidas.</p>
                    </div>

                    <span className="contador-filmes">
                        {filmesFiltrados.length} filmes
                    </span>
                </div>

                <input
                    className="campo-busca-filmes"
                    type="search"
                    placeholder="Buscar filme..."
                    value={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                />

                {filmesFiltrados.length > 0 ? (
                    <div className="filmes">
                        {filmesFiltrados.map((filme, indice) => (
                            <article
                                className="filme"
                                key={`${filme.titulo}-${indice}`}
                            >
                                <div className="imagem-container">
                                    <img
                                        src={filme.imagem}
                                        alt={filme.titulo}
                                    />

                                    <span className="ano-filme">
                                        {filme.ano}
                                    </span>
                                </div>

                                <div className="informacoes-filme">
                                    <h3>{filme.titulo}</h3>
                                    <p className="duracao-filme">
                                        {filme.duracao}
                                    </p>

                                    <button
                                        className="botao-filme"
                                        onClick={() =>
                                            setFilmeSelecionado(filme)
                                        }
                                    >
                                        Assistir
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="nenhum-filme">
                        <h3>Nenhum filme encontrado</h3>
                        <p>Tente pesquisar outro título.</p>

                        <button onClick={() => setBusca('')}>
                            Ver todos os filmes
                        </button>
                    </div>
                )}
            </section>

            <section className="sobre-main" id="sobre">
                <span className="etiqueta-main">SOBRE NÓS</span>
                <h2>O cinema começa aqui.</h2>
                <p>
                    No Freakazoid Filmes, você encontra aventuras,
                    comédias e histórias inesquecíveis em um só lugar.
                </p>
            </section>
        </main>
    )
}

export default Main
