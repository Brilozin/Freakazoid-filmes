
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <a
                href="#inicio"
                className="logo"
                onClick={() => {
                    window.dispatchEvent(new Event('abrir-inicio'))
                }}
            >
                <img src={logo} alt="Logo Freakazoid Filmes" />
                <span>
                    FREAKAZOID
                    <strong>FILMES</strong>
                </span>
            </a>

            <nav className="menu">
                <a
                    href="#inicio"
                    onClick={() => {
                        window.dispatchEvent(new Event('abrir-inicio'))
                    }}
                >
                    Início
                </a>

                <a
                    href="#filmes"
                    onClick={() => {
                        window.dispatchEvent(new Event('abrir-filmes'))
                    }}
                >
                    Filmes
                </a>

                <a
                    href="#series"
                    onClick={(evento) => {
                        evento.preventDefault()
                        window.dispatchEvent(new Event('abrir-series'))
                    }}
                >
                    Séries
                </a>

                <a
                    href="#sobre"
                    onClick={() => {
                        window.dispatchEvent(new Event('abrir-inicio'))
                    }}
                >
                    Sobre
                </a>
            </nav>

            <form
                className="pesquisa"
                onSubmit={(evento) => {
                    evento.preventDefault()

                    const busca =
                        evento.currentTarget.elements.busca.value.trim()

                    if (busca) {
                        window.dispatchEvent(
                            new CustomEvent('buscar-filmes', {
                                detail: busca
                            })
                        )
                    }
                }}
            >
                <input
                    type="search"
                    name="busca"
                    placeholder="Buscar filmes..."
                    aria-label="Buscar filmes"
                />

                <button type="submit">Buscar</button>
            </form>
        </header>
    )
}

export default Header
