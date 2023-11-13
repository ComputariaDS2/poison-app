import './login.css'
import imagem_component from '../assets/imagem_componente.svg'
import imagem_component2 from '../assets/imagem_component2.svg'
import logo_poison from '../assets/logo_poison.svg'
import icones from '../assets/icones.svg'

export function Login() {

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

        <form className='form-cadastro'>
          <div className='container_style'>
            <input type="Email" placeholder='E-MAIL' className='input_style' />
            <span className='focus_input' data-placeholder=''></span>
          </div>

          <div className='container_style'>
            <input type="password" placeholder='SENHA' className='input_style' />
            <span className='focus-input' data-placeholder=''></span>
          </div>
          <div className="div-lembrar">
            <span className='txt_lembrar_senha'>
              Lembrar minha senha
            </span>
            <input type="checkbox" id="input_checkbox" value="lembrar_senha" />
          </div>

          <div id='paragrafo_request'>
            <span>
              Não possui uma conta?
            </span>
            <a href="#" className='link'>Crie uma!</a>
          </div>
          <div className="btn">
            <button type='submit' className='btn-submit'>ENTRAR</button>
          </div>
        </form>

      </section>
    </main>
  )
}

