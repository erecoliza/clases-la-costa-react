//import logo from './logo.svg';
import logo from './LOGO-NUEVO-180x180.png';
import './App.css';

const autos = [
  { id: 1, nombre: "Corsa", modelo: "Chevrolet"},
  { id: 2, nombre: "Siena", modelo: "Fiat"},
  { id: 3, nombre: "Ka", modelo: "Ford"},
  { id: 4, nombre: "Gol", modelo: "Volkswagen"},
  { id: 5, nombre: "A7", modelo: "Audi"},
]


function App() {
  return (
    <div className="App" >
      <header className="App-header" style={{ backgroundColor: "rgb(0, 156, 161)"}} >
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Bienvenidos a la Clase 1 de React</h2>  
      
      <ul>
         { autos.map(auto => (<li>{auto.modelo} - {auto.nombre} </li>)     )}
      </ul>
      </header>
    </div>
  );
}

export default App;
