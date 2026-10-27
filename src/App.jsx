import './App.css'
import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
    const [pesquisa, setPesquisa] = useState('')

    return (
        <div className="app">
            <Header
                pesquisa={pesquisa}
                setPesquisa={setPesquisa}
            />

            <Main pesquisa={pesquisa} />

            <Footer />
        </div>
    )
}

export default App