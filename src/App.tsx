import React from 'react';
import Topo from "./componentes/topo";
import Cartao from "./componentes/cartão";
import Redes from "./componentes/redes";
import Rodape from "./componentes/rodape";

import { Textos } from "./Textos";

import "./App.css"


const App: React.FC = () => {
  return (
    <div className="App">
      <Topo/>
      <div className="BlocoFotos">
          <div>
              <img className="FotoLu" alt="" src="https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-15/e35/115997721_321217389286361_2065696435079822989_n.jpg?tp=1&_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=e5aW36bf7GIAX8vqLwz&oh=d1325c016cbf30165ce2225a4c5e1166&oe=60671E4A" />
          </div>
          <div>
              <img className="FotoHow" alt="" src="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/122823866_138784737975122_4346856834666532861_n.jpg?tp=1&_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=BolyQ2XjfJEAX-tiwvT&oh=2d76b1a67ffdcd8d088f974173af40d3&oe=6063A52B" />
          </div>
      </div>
      {Textos.map((elt, index) => <Cartao key={index} Titulo={elt.titulo} Conteudo={elt.conteudo} Links={""}/>)}
      <Cartao Titulo="Nossas redes:" Conteudo={""} Links={Redes}/>
      <Rodape />
    </div>
  );
}

export default App;
