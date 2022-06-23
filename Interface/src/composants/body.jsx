import { useState } from "react"
const clients=[
    {
        cient:"franco roberto",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    },
    {
        cient:"franco",
        status:"payer",
        offre:"premium",
        jour_de_depart:"12/34/23",
        heur_de_depart:"12:37",
        vehicule:"9",
        chauffeur:"rafra"
    }
]
const Tr=["nom du client","status","offre","vehicule","chauffeur"]
export const Table=()=>{
    const [state,setState]=useState(false)
    function handleclick(){
        setState(!state)
    }
    return(
        <div className="completeTable">
            {state ? <Modale state={handleclick}/>:""}
            <FieldOfRequest allTr={Tr} number={3}/>
            {/* <button className="search" onClick={handleclick}>recherche</button> */}
        </div>
    )
}
function Modale({state}){
    return(<>
        <div className="sombre"></div>
        <div className="modale">
            <button className="croix" onClick={state}>X</button>
            <input type="text" placeholder="search"></input> <br />
            <button>search</button>
        </div>
        </>
    )
}
const FieldOfRequest=({allTr,donner})=>{
    return(
        <table className="table">
                <thead className="labelOfTable">
                <tr>
                    {allTr.map((Td)=>(
                        <td className="topOfTable"><label>{Td}</label></td>
                    ))}
                </tr>
                
                </thead>
            <tbody className="bodyTable">
                {clients.map((client)=>(
                    <tr>
                        <td>{client.cient}</td>
                        <td>{client.status}</td>
                        <td>{client.offre}</td>
                        <td>{client.vehicule}</td>
                        <td>{client.chauffeur}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}