
import { useState } from 'react';
import CITIES from './ciutats.json';


function Ciutats (){

    const [comarca, setComarca] = useState("Gironès");


    const ciudad = CITIES[1];

    return (
        <>
        <h1>{CITIES[1].municipi}</h1>

        <button onClick={()=>setComarca("Barcelonès")}>BCN</button>
        <button onClick={()=>setComarca("Garraf")}>Garraf</button>

        <table>

            <thead>
                <th>Municipi</th>
                <th>Poblacio</th>
                <th>Comarca</th>
            </thead>

            <tbody>
            
            {
                CITIES.filter(c => c.comarca===comarca).map(ciudad =>  <tr>
                    <td>{ciudad.municipi}</td>
                    <td>{ciudad.poblacio}</td>
                    <td>{ciudad.comarca}</td>
                </tr>)

            }

               

            </tbody>

        </table>
        
        </>
    )
}


export default Ciutats;
