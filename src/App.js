import './App.css';
import './media.css';
import Burgers from './components/burger';
import SideMenu from './components/sideMenu';
import Search from './components/search';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Slider from './components/slider';

function App() {
  return (
    
    <div className="App">
      <SideMenu/>
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
      <Slider />
    </div>
  );
}

export default App;
