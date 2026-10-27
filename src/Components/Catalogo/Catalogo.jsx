
import './catalogo.css'

function Catalogo({ filme, voltar }) {
    const videoUrl =
        `https://www.youtube.com/results?search_query=${encodeURIComponent(filme.titulo + ' filme')}`

    return (
        <main className="pagina-filme">
            <button className="voltar" onClick={voltar}>
                ← Voltar ao catálogo
            </button>

            <section className="detalhes-filme">
                <div className="lado-esquerdo">
                    <span className="etiqueta">FREAKAZOID FILMES</span>
                    <h1>{filme.titulo}</h1>

                    <div className="metadados">
                        <span>{filme.ano}</span>
                        <span>Filme</span>
                    </div>

                    <p className="descricao-filme">{filme.descricao}</p>

                    <button
                        className="botao-assistir"
                        onClick={() => window.open(
                            videoUrl,
                            '_blank',
                            'noopener,noreferrer'
                        )}
                    >
                        ▶ Assistir
                    </button>
                </div>

                <div className="lado-direito">
                    <img
                        src={filme.imagem}
                        alt={filme.titulo}
                        className="imagem-filme"
                    />
                </div>
            </section>
        </main>
    )
}

export default Catalogo
