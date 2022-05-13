//import logo from './logo.svg';
import logo from './LOGO-NUEVO-180x180.png';
//import "./reset.css";
import './App.css';
import autos from './Autos.json';

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
        <h2>Bienvenidos a la Clase 1 de React</h2>  
        
        <div className="box">            
            { autos && autos.map(auto => (
              <div key={auto.id}>({auto.id}) {auto.modelo} <br />              
               {auto.nombre} </div>
            ))}     
        </div>
        <a href="http://www.autos.com.ar" className="App-link" target="noreferrer">Autos</a> 
        <ul>
          { autos.map(auto => (<li>{auto.modelo} - {auto.nombre} </li>)    )}          
        </ul>        
      </header>      
    </div>
  );
}

export default App;
