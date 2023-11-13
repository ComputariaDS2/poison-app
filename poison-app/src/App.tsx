import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cadastro } from './pages/cadastro-usuario'
import { Login } from './pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
