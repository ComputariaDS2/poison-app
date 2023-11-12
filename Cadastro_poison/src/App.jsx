import './App.css'
import logo_poison from './assets/logo_poison.svg'
import imagem_component from './assets/imagem_componente.svg'
import imagem_component2 from './assets/imagem_component2.svg'
import imagem_component3 from './assets/imagem_component3.svg'
import icones from './assets/icones.svg'
import icone_email from './assets/icone_email.svg'

function Tela_cadastro() {

  return (
   <><img src={logo_poison} alt="" className='logo' />
   
   <div className='container_txt_inicial'>
    <h2 className='txt_cadastro_de_usuario'>CADASTRO DE USUÁRIO</h2>
   </div>

  <img src={imagem_component} alt="" className='imagem_component'/>
  
  <img src={imagem_component2} className='imagem_component2'/>
  
  <img src={imagem_component3} alt="" className='imagem_component3'/>
  
  <img src={icones} alt="" className='icones'/>
  
  <img src={icone_email} alt="" className='icone_email'/>

  <form action="" className='form-cadastro'>

  <div className='container_style'>
    <input type="name" placeholder='NOME' className='input_style'/>
    <span className='focus_input' data-placeholder=''></span>
  </div>
    
  <div className='container_style'>
    <input type="Email" placeholder='E-MAIL' className='input_style' />
    <span className='focus_input' data-placeholder=''></span>
  </div>

  <div className='container_style'>
    <input type="password" placeholder='SENHA' className='input_style'/>
    <span className='focus-input' data-placeholder=''></span>
  </div>

  <div className='confirmar_style'>
    <input type="password" placeholder='CONFIRMAR SENHA' className='input_style'/>
    <span className='focus-input' data-placeholder=''></span>
  </div>

  </form>
  
  <div className='container-botão'>
    <button type='submit' className='botão'>CADASTRAR</button>
  </div>
  
  <p className='paragrafo_request'>já possui uma conta?<a href="#" className='link'>clique aqui!</a></p>
  
  </>

  
)
  
}
export default Tela_cadastro
