
import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="sobre">
            <div className="footer-conteudo">
                <div className="footer-logo">
                    <a href="#inicio" className="footer-marca">
                        <span className="footer-icone">▶</span>

                        <span>
                            FREAKAZOID
                            <strong>FILMES</strong>
                        </span>
                    </a>

                    <p>
                        Seu próximo filme favorito está aqui.
                        Prepare a pipoca e aproveite!
                    </p>
                </div>

                <div className="footer-coluna">
                    <h3>Navegação</h3>

                    <a href="#inicio">Início</a>
                    <a href="#filmes">Filmes</a>
                    <a href="#series">Séries</a>
                </div>

                <div className="footer-coluna footer-info">
                    <h3>Sobre nós</h3>

                    <p>
                        Um lugar para descobrir grandes histórias,
                        rever clássicos e encontrar sua próxima
                        aventura cinematográfica.
                    </p>
                </div>
            </div>

            <div className="footer-final">
                <p>
                    © {new Date().getFullYear()} Freakazoid Filmes.
                    Todos os direitos reservados.
                </p>

                <a href="#inicio" className="voltar-topo">
                    Voltar ao topo ↑
                </a>
            </div>
        </footer>
    )
}

export default Footer
