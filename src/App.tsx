import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header/Header'
import Relatorio from './pages/Relatorio/Relatorio'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={"oi"} />
          <Route path="/rca" element={"ola"} />
          <Route path="/relatorios" element={<Relatorio />} />
          
        </Routes>
      </main>
    </>
  )
}

export default App
