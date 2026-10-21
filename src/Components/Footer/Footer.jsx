
import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="sobre">
            <div className="footer-conteudo">
                <div className="footer-logo">
                    <h2>🎬 Freakazoid Filmes</h2>
                    <p>
                        Seu próximo filme favorito está aqui!
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>
                    <a href="#inicio">Início</a>
                    <a href="#filmes">Filmes</a>
                    <a href="#series">Séries</a>
                </div>

                <div className="footer-info">
                    <h3>Sobre nós</h3>
                    <p>
                        Um espaço para descobrir filmes,
                        explorar histórias e encontrar diversão.
                    </p>
                </div>
            </div>

            <div className="footer-final">
                <p>
                    © {new Date().getFullYear()} Freakazoid Filmes.
                    Todos os direitos reservados.
                </p>
                <p>Feito com ❤️ para quem ama cinema.</p>
            </div>
        </footer>
    )
}

export default Footer
