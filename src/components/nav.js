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
    <div className='texts'>
      <a className='a' href='home'>Mangás</a>
      <a className='a' href='home'>Categorias</a>
      <a className='a' href='home'>Comunidade</a>
    </div>
    <Search />
    <Burgers />
  </nav>
  <nav id='nav2'>
    <a href='home'>Destaques</a>
    <a href='home'>Mais Lidos Da Semana</a>
    <a href='home'>Lançamentos</a>
    <a href='home'>Recém adicionados</a>
    <a href='home'>Recém finalizados</a>
  </nav>
  </div>
)
}

export default Nav