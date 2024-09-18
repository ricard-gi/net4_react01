import "./Numero.css";

function Numero(props){

    return (
        <div className="caja">
            {props.valor}
        </div>
    )
}

export default Numero;