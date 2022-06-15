import axios from "axios";
import { useEffect, useState} from "react";

const Autos = () => {
    const [autosData, setAutosData] = useState([]);
    const [autosError, setAutosError ] = useState({
        isError: false,
        message: '',
    })
    const [isAutosLoading, setIsAutosLoading] = useState(false);
    const [botonActualizador, SetBotonActulizador] = useState(false);

    useEffect(() => {
        console.log("ejecuntado llamada");
        axios('http://localhost:8000/autos')
        .then(res => setAutosData(res.data))
        .catch(autosError => setAutosError({
            isError: true,
            message: autosError.message,
        }))
        .finally(() => {
            setTimeout(() => {
                setIsAutosLoading(false)
            },1000)
        })
    },[botonActualizador])

    return (
        <>
        { //<button onClick={() => SetBotonActulizador(!botonActualizador)}>Boton Actualizador</button> }
     
        autosError.isError  ? <h4 style={{color:'red'}}>Error: {autosError.message}</h4> :
        isAutosLoading ? <h4>Cargando....</h4> :

        autosData.length !== 0 &&
                autosData.map(auto => (
                <div key={auto.id}>({auto.id}) {auto.modelo} <br />              
                    {auto.nombre}    
                    <a href={`http://www.autos.com.ar/buscar/${auto.modelo}+${auto.nombre}`} className="App-link" target="noreferrer"><i class="material-icons">&#xe8b6;</i></a>     
                </div>
                ))     
        }
        </>
    );
}
export default Autos;