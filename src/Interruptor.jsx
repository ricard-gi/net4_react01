import { useState } from "react";



function Interruptor() {

    const [valido, setValido] = useState(0);
    
    function cambia(){
        setValido(valido+1 )
    }

    const ok = <svg onClick={cambia} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-up" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
    </svg>


    const nok = <svg onClick={cambia} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-down" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
    </svg>

    const nok2 = <svg onClick={cambia}  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-up-off" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a3.987 3.987 0 0 0 2.828 -1.172m1.172 -2.828v-1a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2c-.222 1.112 -.39 1.947 -.5 2.503m-.758 3.244c-.392 .823 -1.044 1.312 -1.742 1.253h-7a3 3 0 0 1 -3 -3" />
            <path d="M3 3l18 18" />
        </svg>



    return (
        <span style={{cursor: "pointer"}}>
            {[ok,nok,nok2][valido%3]}
        </span>
 
    )
}


export default Interruptor;

