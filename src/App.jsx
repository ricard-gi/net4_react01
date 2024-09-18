
import Contador from "./Contador";
import Numero from "./Numero";
import Titulo from "./Titulo";


function App() {

    const pi = 3.14;
    const meses = ["enero", "febrero", "marzo", "abril"];

    const valores = [2,4,6,8,3,77,88]

    const titulo="Hola React"

    return (
        <>
            <Titulo texto={titulo}  color="red" />
            <Titulo texto="titulo verde"  color="green" />

            <h1>Hola React: {pi * 2} </h1>
       
            <ul>
                {meses.map(e => <li key={e}>{e}</li>)}
            </ul>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a. Earum aliquid tempora ut excepturi soluta, totam dolor, adipisci amet, aspernatur deleniti tenetur. Ab quod est alias ipsa quasi assumenda.</p>
            <Contador />
            {valores.map(z => <Numero key={z} valor={z} />)}
            
        </>
    )
}


export default App;