import './App.css'
import imagem_component from './assets/imagem_componente.svg'
import imagem_component2 from './assets/imagem_component2.svg'
import imagem_component3 from './assets/imagem_component3.svg'
import logo_poison from './assets/logo_poison.svg'
import icones from './assets/icones.svg'

function Tela_de_login() {

  return (

 <><img src={logo_poison} alt="" className='logo' />
   
   <div className='container_txt_inicial'>
    <h2 className='txt_login_de_usuario'>LOGIN DO USUÁRIO</h2>
   </div>

  <img src={imagem_component} alt="" className='imagem_component'/>
  
  <img src={imagem_component2} className='imagem_component2'/>
  
  <img src={imagem_component3} alt="" className='imagem_component3'/>
  
  <img src={icones} alt="" className='icones'/>

  <form action="" className='form-cadastro'>
    
  <div className='container_style'>
    <input type="Email" placeholder='E-MAIL' className='input_style' />
    <span className='focus_input' data-placeholder=''></span>
  </div>

  <div className='container_style'>
    <input type="password" placeholder='SENHA' className='input_style'/>
    <span className='focus-input' data-placeholder=''></span>
  </div>

  </form>


  <div className='container_checkbox'>
  <p className='txt_lembrar_senha'><input type="checkbox" id="input_checkbox" value="lembrar_senha"/>Lembrar minha senha</p>
  </div>
  
  <p className='txt_esqueceu_senha'>esqueceu sua senha?</p>

  <div className='container-botão'>
    <button type='submit' className='botão'>ENTRAR</button>
  </div>
  
  <p className='paragrafo_request'>Não possui uma conta? <a href="#" className='link'>Crie uma!</a></p>
  

    </>
  )
}

export default Tela_de_login
