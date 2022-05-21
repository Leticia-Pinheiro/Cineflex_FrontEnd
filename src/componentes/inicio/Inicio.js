import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './style.css'
import axios from 'axios'

export default function Inicio(){

    const [poster, setPoster] = useState([])

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promisse.then(response => {
            setPoster(response.data)
        })
    }, [])
    

    return(
        <div className = "inicio">
            <span>Selecione o filme</span>

            <div className = "cartazes">
                
                    {poster.map(poster => 
                    <div key = {poster.id}> 
                    <Link to={`/sessoes/${poster.id}`}>

                    <div className = "cartaz">                        
                            <img src={poster.posterURL}/>                     
                    </div>
                    
                    </Link>
                    </div>)}

            </div>            
            
        </div>
    )
}





