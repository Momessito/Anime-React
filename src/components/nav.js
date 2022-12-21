import Search from './search';
import Burgers from './burger';
import '../App.css';
import '../media.css';
import React from "react"


function Nav(){
return(
    <div>
    <nav>
    <div className='Logo'>
      <img src='https://images.vexels.com/media/users/3/157555/isolated/preview/2b48b29abd18febe3b1f92a85913ce39-icone-de-livro-simples.png' alt='Logo' height='30px' />
    </div>
    <h1 className='logo-text'>Mangas Livres</h1>
    <div className='texts3'>
      <h2 className='a' >Mangás</h2>
      <h2 className='a' >Categorias</h2>
      <h2 className='a' >Comunidade</h2>
    </div>
    <Search />
    <Burgers />
  </nav>
  <nav id='nav2'>
    <h2 onClick={slider}>Destaques</h2>
    <h2 >Mais Lidos Da Semana</h2>
    <h2 >Lançamentos</h2>
    <h2 >Recém adicionados</h2>
    <h2 >Recém finalizados</h2>
  </nav>
  </div>
)

function slider(){


}}

export default Nav