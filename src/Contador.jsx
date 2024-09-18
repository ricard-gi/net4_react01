import { useState } from "react";
import "./Contador.css";

function Contador(){

    const [valor, setValor] = useState(11);

    function actualiza(){
        setValor(valor+1);
        console.log(valor);
    }


    return (
        <div className="caja2" onClick={actualiza}>
            {valor}
        </div>
    )
}

export default Contador;