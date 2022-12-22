import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FunctionComponent from "./components/FunctionComponent.jsx";
import ClassComponent from "./components/ClassComponent.jsx";
import Propiedades from "./components/Propiedades.jsx";
import PropiedadesComponente from "./components/PropiedadesComponente.jsx";
import Estado from "./components/Estado.jsx";
import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
import RenderizadoElementos from "./components/RenderizadoElementos.jsx";
import EventosES6 from "./components/EventosES6.jsx";
import EventosES7 from "./components/EventosES7.jsx";
import MasSobreEventos from "./components/MasSobreEventos.jsx";
import ComunicacionComponentes from "./components/ComunicacionComponentes.jsx";
import CicloDeVida from "./components/CicloDeVida.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [booleeano, setBooleano] = useState(false);
    const arreglo = ["uno","dos","tres"]

    let nombre = "Brodely";
    let auth = true;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

        <br/>

        <h2>{nombre}</h2>
        <label htmlFor="nombre">Brodely </label>
        <input type="text" id="nombre" />
        <h3>{auth ? "Sesion Iniciada" : "Sesion Cerrada"}</h3>
        <button onClick={() => setBooleano(!booleeano)}>{booleeano? "Verdadero" : "Falso"}</button>

        <br/>

        <ul>
            {arreglo.map((elemento, index) => <li key={index}>{elemento}</li>)}
        </ul>

        <FunctionComponent propiedad="Soy una propiedad del componente F"></FunctionComponent>
        <ClassComponent propiedad="Soy una propiedad del componente C"></ClassComponent>

        <br/>

        <Propiedades
            cadena="texto"
            numero={10}
            booleano={true}
            arreglo={[1,2,3,4,5]}
            objeto={{nombre:"Brodely", apellido:"Tovar"}}
            elemento={<b>Elemento</b>}
            funcion={num => num*num}
            componente={<PropiedadesComponente msg="Soy un Componente desde una Propiedad"/>}
        />

        <br/>

        <Estado/>

        <br/>

        <RenderizadoCondicional />

        <br/>

        <RenderizadoElementos/>

        <br/>

        <EventosES6/>
        <EventosES7/>
        <MasSobreEventos/>

        <br/>

        <ComunicacionComponentes/>

        <br/>

        <CicloDeVida/>

    </div>
  )
}

export default App
