
import './Series.css'

function Series({ voltar }) {
    const series = [
        {
            titulo: 'Stranger Things',
            ano: 2016,
            temporadas: '5 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
            descricao: 'O desaparecimento de um garoto revela experimentos secretos e forças sobrenaturais.'
        },
        {
            titulo: 'Breaking Bad',
            ano: 2008,
            temporadas: '5 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            descricao: 'Um professor de química toma decisões perigosas após receber um diagnóstico grave.'
        },
        {
            titulo: 'The Walking Dead',
            ano: 2010,
            temporadas: '11 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg',
            descricao: 'Sobreviventes lutam para continuar vivos em um mundo dominado por zumbis.'
        },
        {
            titulo: 'Game of Thrones',
            ano: 2011,
            temporadas: '8 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
            descricao: 'Famílias poderosas disputam o controle dos Sete Reinos.'
        },
        {
            titulo: 'The Last of Us',
            ano: 2023,
            temporadas: '2 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            descricao: 'Joel e Ellie atravessam um mundo devastado por uma infecção.'
        },
        {
            titulo: 'Wandinha',
            ano: 2022,
            temporadas: '2 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
            descricao: 'Wandinha Addams investiga mistérios durante seus estudos na Escola Nunca Mais.'
        },
        {
            titulo: 'Loki',
            ano: 2021,
            temporadas: '2 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg',
            descricao: 'O Deus da Trapaça enfrenta mistérios envolvendo o tempo e outras realidades.'
        },
        {
            titulo: 'The Boys',
            ano: 2019,
            temporadas: '5 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg',
            descricao: 'Um grupo tenta expor super-heróis poderosos que escondem um lado sombrio.'
        },
        {
            titulo: 'Round 6',
            ano: 2021,
            temporadas: '3 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg',
            descricao: 'Participantes competem em jogos perigosos por um prêmio milionário.'
        },
        {
            titulo: 'Cobra Kai',
            ano: 2018,
            temporadas: '6 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/6POBWc6ieUg0Q5W1UWS5HE1miCY.jpg',
            descricao: 'Rivais antigos reabrem a disputa por meio de escolas de karatê.'
        },
        {
            titulo: 'Supernatural',
            ano: 2005,
            temporadas: '15 temporadas',
            imagem: 'https://image.tmdb.org/t/p/w500/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg',
            descricao: 'Dois irmãos viajam pelos Estados Unidos caçando criaturas sobrenaturais.'
        }
    ]

    function assistirTrailer(titulo) {
        const pesquisa = encodeURIComponent(`${titulo} trailer oficial`)
        window.open(
            `https://www.youtube.com/results?search_query=${pesquisa}`,
            '_blank',
            'noopener,noreferrer'
        )
    }

    return (
        <main className="pagina-series">
            <button className="botao-voltar-series" onClick={voltar}>
                ← Voltar ao catálogo
            </button>

            <section className="destaque-series">
                <span>FREAKAZOID FILMES</span>
                <h1>Séries em destaque</h1>
                <p>Encontre sua próxima série favorita.</p>
            </section>

            <section className="conteudo-series">
                <div className="titulo-series">
                    <div>
                        <h2>Explore as séries</h2>
                        <p>Histórias para maratonar e descobrir.</p>
                    </div>
                    <span>{series.length} séries</span>
                </div>

                <div className="lista-series">
                    {series.map((serie) => (
                        <article className="card-serie" key={serie.titulo}>
                            <div className="imagem-serie-container">
                                <img
                                    className="imagem-serie"
                                    src={serie.imagem}
                                    alt={`Pôster de ${serie.titulo}`}
                                    loading="lazy"
                                />
                                <span className="ano-serie">{serie.ano}</span>
                            </div>

                            <div className="informacoes-serie">
                                <span className="etiqueta-serie">
                                    SÉRIE EM DESTAQUE
                                </span>

                                <h3>{serie.titulo}</h3>

                                <p className="detalhes-serie">
                                    {serie.temporadas}
                                </p>

                               

                                <button
                                    className="botao-trailer-serie"
                                    onClick={() => assistirTrailer(serie.titulo)}
                                >
                                    ▶ Assistir trailer
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Series
