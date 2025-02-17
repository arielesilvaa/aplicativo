import React from 'react';
import Logo from './components/img/capa.png'; 
import Eu from './components/img/ari.jpg'; 

export default function App(){

  const canal=()=> {
    return('Ariele silva  @arielefront');
  }

  //const canal ='Ariele silva  @arielefront';
  const curso ='ReactJS';
  return (
    <>
      <header>

        <p>{canal()}</p>
        <p>{'curso: ' + curso}</p>

      </header>
      <section>

        <img src={Logo} alt="Logo" width="200" height="250" />
        <img src={Eu} alt="Logo" width="200" height="250" />
        <p>Olá, sou Ariele Silva, desenvolvedora Front-End.</p>
      </section>
    </>
  );
}
