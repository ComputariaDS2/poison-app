import './App.css'
import menu_sanduiche from './assets/menu_sanduiche.svg'
import botão_conta from './assets/botão_conta.svg'

function Tela_cadastro_produtos() {

  return (
    <>
     <div className='container_cabeçalho'>
      <header className='cabeçalho'>
        <h2 className='txt_produtos'>PRODUTOS</h2>
        <img src={menu_sanduiche} alt="" className='img_menu' />
        <img src={botão_conta} alt="" className='img_conta'/>
      </header>
     </div>

     <div className='container_cadastro'>
        
        <div className='container_header_cadastro'>
          <h2 className='txt_produto'>PRODUTO</h2>
          <h2 className='txt_preço'>PREÇO</h2>
          <h2 className='txt_vendas'>VENDAS</h2>
        </div>

     </div>
    </>
  )
}

export default Tela_cadastro_produtos
