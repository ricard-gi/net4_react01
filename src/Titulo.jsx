

function Titulo(props){

    const estilos={
        color: props.color,
        border: "1px solid blue",
        padding: "8px",
        backgroundColor: "blue"
    }

    return (
        <>
            <h1 style={estilos}>{props.texto}</h1>
        </>
    )
}

export default Titulo;


