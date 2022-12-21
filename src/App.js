import './App.css';
import './media.css';
import SideMenu from './components/sideMenu';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Slidess from './components/slider';
import List from './components/api';
import MostReaded from './apitest';
import Top from './components/carroseu';

function App() {
  var isH = false

  return (

    <div className="App">
      <SideMenu />
      <Nav />
<div className='carro'>
      <Slidess />
</div>
      <div className='all'>
        <div className='all2'>
          <List />
          <button id='carregar' onClick={carregar}>Carregar Mais</button>
        </div>
        <div className='all2'>
          <MostReaded />
          <button id='carregard' onClick={carregar2}>Carregar Mais</button>
          <div className='Top'>
            <h1>Mais lidos da semana</h1>
          <Top/>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );


  function carregar() {
    var background = document.getElementById('Container');
    var button = document.getElementById('carregar')

    if (isH === false) {
      isH = true
      background.style.height = 'auto'
      button.innerText = 'Carregar Menos'
    } else {
      isH = false
      background.style.height = '200vh'
      button.innerText = 'Carregar Mais'

    }
  }

  function carregar2() {
    var background = document.getElementById('Container2');
    var button = document.getElementById('carregard')

    if (isH === false) {
      isH = true
      background.style.height = 'auto'
      button.innerText = 'Carregar Menos'
    } else {
      isH = false
      background.style.height = '50vh'
      button.innerText = 'Carregar Mais'

    }
  }

}


export default App;
