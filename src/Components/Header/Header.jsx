import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo Freakazoid Filmes" />
                <span>Freakazoid Filmes</span>

            </div>

            <nav className="menu">
                <a href="#inicio">Início</a>
                <a href="#filmes">Filmes</a>
                <a href="#series">Séries</a>
                <a href="#sobre">Sobre</a>
            </nav>

            <div className="pesquisa">
                <input
                    type="text"
                    placeholder="Buscar filmes..."
                />
                <button>Buscar</button>
            </div>
        </header>
    )
}

export default Header