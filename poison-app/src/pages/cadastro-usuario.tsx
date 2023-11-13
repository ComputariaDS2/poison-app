import './login.css'
import imagem_component from '../assets/imagem_componente.svg'
import imagem_component2 from '../assets/imagem_component2.svg'
import logo_poison from '../assets/logo_poison.svg'
import icones from '../assets/icones.svg'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Usuario } from '../services/usuarios'

export function Cadastro() {
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate();


  async function cadastrarUser(e) {
    e.preventDefault()
    const data = {login: nome, categoria, senha}
    const response = await Usuario.createUsuario(data)
    if (response.status === 200) {
      navigate('/login')
    }
  }

  return (

    <main>

      <div className="side">
        <img src={imagem_component} alt="" className='imagem_component' />
        <img src={imagem_component2} className='imagem_component2' />
      </div>

      <section className="form">
        <section className='logo-section'>
          <img src={logo_poison} alt="" className='logo-img' />
          <h2 className='txt_login_de_usuario'>LOGIN DO USUÁRIO</h2>
          <img src={icones} className='icones' />
        </section>

        <form className='form-cadastro' onSubmit={cadastrarUser}>
        <div className='container_style'>
            <input type="text"
             placeholder='NOME'
              className='input_style'
              onChange={(e) => setNome(e.target.value)} />
            <span className='focus_input' data-placeholder=''></span>
          </div>
          <div className='container_style'>
            <input type="text"
             placeholder='CATEGORIA'
              className='input_style' 
              onChange={(e) => setCategoria(e.target.value)}/>
            <span className='focus_input' data-placeholder=''></span>
          </div>

          <div className='container_style'>
            <input type="password"
             placeholder='SENHA'
              className='input_style'
              onChange={(e) => setSenha(e.target.value)} />
            <span className='focus-input' data-placeholder=''></span>
          </div>
          <div className='container_style'>
            <input type="password" placeholder='CONFIRMAR SENHA' className='input_style' />
            <span className='focus-input' data-placeholder=''></span>
          </div>

          <div className="btn">
            <button type='submit' className='btn-submit'>CADASTRAR</button>
          </div>
        </form>

      </section>
    </main>
  )
}

