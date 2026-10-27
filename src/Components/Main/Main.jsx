import './Main.css'
import { useState } from 'react'
import Catalogo from '../Catalogo/Catalogo'

function Main() {
    const [filmeSelecionado, setFilmeSelecionado] = useState(null)
    const [cliquesAssistir, setCliquesAssistir] = useState(0)
    const [mostrarVirus, setMostrarVirus] = useState(false)

    const filmes = [
        {
            titulo: 'Ktchau!',
            ano: 2006,
            duracao: 'Duração não confirmada',
            imagem: 'https://tse4.mm.bing.net/th/id/OIP.zdveHEFRnxfxM9BU784xxgHaK4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            descricao: 'Uma aventura divertida cheia de personagens marcantes e momentos inesperados.'
        },
        {
            titulo: 'O Galinho Chicken Little',
            ano: 2005,
            duracao: '1h 21min',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Chicken_Little_%28Disney%29.jpg/250px-Chicken_Little_%28Disney%29.jpg',
            descricao: 'Chicken Little precisa recuperar a confiança da cidade depois de anunciar que o céu está caindo.'
        },
        {
            titulo: 'Gigantes de aço',
            ano: 2011,
            duracao: '2h 07min',
            imagem: 'https://m.media-amazon.com/images/M/MV5BZjAxMjU4YjEtZGEyZC00ZDg1LWJiMDItNDBhY2Y3YjRjZTBiXkEyXkFqcGc@._V1_.jpg',
            descricao: 'Em um futuro onde robôs lutam no ringue, um ex-boxeador e seu filho treinam uma máquina para competir.'
        },
        {
            titulo: 'Super-Herói - O Filme',
            ano: 2008,
            duracao: '1h 25min',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/9/94/Superhero_P%C3%B4ster.jpg',
            descricao: 'Uma comédia que brinca com as histórias clássicas de super-heróis e suas aventuras.'
        },
        {
            titulo: 'Deu a Louca na Chapeuzinho Vermelho',
            ano: 2005,
            duracao: '1h 20min',
            imagem: 'https://i.pinimg.com/originals/76/ff/5a/76ff5adef0bd759ce2a803bb2663ed01.jpg',
            descricao: 'Uma investigação maluca apresenta diferentes versões de um conhecido conto de fadas.'
        },
        {
            titulo: 'Tá Dando Onda',
            ano: 2007,
            duracao: '1h 25min',
            imagem: 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/00/1100514_ta-dando-onda-filme-infantil-ms_z1_637382952582236308.jpg',
            descricao: 'Um jovem pinguim apaixonado pelo surfe participa de uma competição cheia de desafios.'
        },
        {
            titulo: 'As Branquelas',
            ano: 2004,
            duracao: '1h 49min',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy5F_QLDWTUSj8jf0ME7Ime6ONCxqgDLzj8ahjOguNg&s=10',
            descricao: 'Dois agentes do FBI se disfarçam de socialites para investigar um caso cheio de confusões.'
        }
    ]

    function clicarAssistir(filme) {
        const total = cliquesAssistir + 1

        setCliquesAssistir(total)

        if (total >= 5) {
            setMostrarVirus(true)
            setFilmeSelecionado(null)
        } else {
            setFilmeSelecionado(filme)
        }
    }

    if (filmeSelecionado && !mostrarVirus) {
        return (
            <Catalogo
                filme={filmeSelecionado}
                voltar={() => setFilmeSelecionado(null)}
            />
        )
    }

    return (
        <main className="main">
            <h1>Filmes em destaque</h1>
            <p className="subtitulo-main">
                Sua próxima sessão começa aqui. Escolha um filme!
            </p>

            <div className="filmes">
                {filmes.map((filme) => (
                    <div className="filme" key={filme.titulo}>
                        <img
                            src={filme.imagem}
                            alt={filme.titulo}
                        />

                        <h2>{filme.titulo}</h2>

                        <p>{filme.ano}</p>

                        <button
                            onClick={() => clicarAssistir(filme)}
                        >
                            ▶ Assistir
                        </button>
                    </div>
                ))}
            </div>

            {mostrarVirus && (
                <div className="virus-easter-egg">
                    <div className="virus-conteudo">
                        <div className="virus-emoji">🤡</div>

                        <h1>SIR YOU PC HAS VIRUS SIR</h1>

                        <p>TECH SUPPORT MOMENT 💀</p>

                        <p>Your computer has 69420 viruses!</p>

                        <p className="virus-aviso">
                            Relaxa, é só uma brincadeira 😂
                        </p>

                        <button
                            onClick={() => {
                                setMostrarVirus(false)
                                setCliquesAssistir(0)
                            }}
                        >
                            OK, YOU GOT ME 😂
                        </button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Main