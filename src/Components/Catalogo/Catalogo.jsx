
import './Catalogo.css'

function Catalogo({ filme, voltar }) {
    const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        filme.titulo + ' trailer oficial'
    )}`

    return (
        <main className="pagina-filme">
            <div className="fundo-cinematografico"></div>

            <div className="conteudo-catalogo">
                <button className="voltar" onClick={voltar}>
                    <span>←</span> Voltar ao catálogo
                </button>

                <section className="detalhes-filme">
                    <div className="lado-esquerdo">
                        <span className="etiqueta">
                            FREAKAZOID <span>FILMES</span>
                        </span>

                        <h1>{filme.titulo}</h1>

                        <div className="metadados">
                            <span>📅 {filme.ano}</span>
                            {filme.duracao && (
                                <span>◷ {filme.duracao}</span>
                            )}
                            <span>🎬 Filme</span>
                        </div>

                        <div className="linha-vermelha"></div>

                        <h2>Sobre o filme</h2>

                        <p className="descricao-filme">
                            {filme.descricao ||
                                `Prepare-se para conhecer ${filme.titulo}, uma história cheia de momentos inesquecíveis. Descubra todos os detalhes deste filme no Freakazoid Filmes.`}
                        </p>

                        <div className="acoes-filme">
                            <button
                                className="botao-assistir"
                                onClick={() =>
                                    window.open(
                                        videoUrl,
                                        '_blank',
                                        'noopener,noreferrer'
                                    )
                                }
                            >
                                <span>▶</span> Assistir trailer
                            </button>

                            <button
                                className="botao-secundario"
                                onClick={voltar}
                            >
                                Explorar filmes
                            </button>
                        </div>

                        <p className="aviso-trailer">
                            Você será direcionado ao YouTube para encontrar
                            o trailer do filme.
                        </p>
                    </div>

                    <div className="lado-direito">
                        <div className="moldura-poster">
                            <img
                                src={filme.imagem}
                                alt={`Pôster de ${filme.titulo}`}
                                className="imagem-filme"
                            />
                            <div className="poster-legenda">
                                <span>FREAKAZOID ORIGINAL</span>
                                <span>{filme.ano}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="rodape-catalogo">
                    <span className="rodape-logo">
                        ▶ FREAKAZOID <strong>FILMES</strong>
                    </span>
                    <span>Seu próximo filme favorito está aqui.</span>
                </footer>
            </div>
        </main>
    )
}

export default Catalogo
