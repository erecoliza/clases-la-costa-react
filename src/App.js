//import logo from './logo.svg';

import logo from './LOGO-NUEVO-180x180.png';
//import "./reset.css";
import './App.css';
import autos from './Autos.json';
import Autoss from './components/Autoss';
import AutosConsulta from './components/AutosConsulta';

/*const autos = [
  { id: 1, nombre: "Corsa", modelo: "Chevrolet"},
  { id: 2, nombre: "Siena", modelo: "Fiat"}, 
]
// autos && autos.map(auto =>  verifca si hay datos antes de hacer el map "
*/

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenidos a la Clase 2 de React</h2>  
        <div className="box">    
          
          <AutosConsulta />
        </div>        
      </header>      
      <footer className="App-footer">
      <h4>Página creada por <i class="material-icons">&#xe7fd;</i> Eduardo Recoliza   -  <i class="material-icons">&#xe55e;</i>  Argentina (2022)</h4>   
      </footer>
    </div>
  );
}

export default App;
