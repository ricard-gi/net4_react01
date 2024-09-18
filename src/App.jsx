
import Contador from "./Contador";
import Numero from "./Numero";


function App() {

    const pi = 3.14;
    const meses = ["enero", "febrero", "marzo", "abril"];

    const valores = [2,4,6,8,3,77,8]




    return (
        <>
            <h1>Hola React: {pi * 2} </h1>
            <Contador />
            <ul>
                {meses.map(e => <li>{e}</li>)}
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a. Earum aliquid tempora ut excepturi soluta, totam dolor, adipisci amet, aspernatur deleniti tenetur. Ab quod est alias ipsa quasi assumenda.</p>

            {valores.map(z => <Numero valor={z} />)}
            
        </>
    )
}


export default App;