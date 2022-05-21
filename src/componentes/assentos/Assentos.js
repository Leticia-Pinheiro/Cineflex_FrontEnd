import './style.css'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Assentos(){

    const {idSessao} = useParams()

    const [assentos, setAssentos] = useState([])
    

    useEffect(() => {
        const promisse = axios.get(
          `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        );
    
        promisse.then((response) => {
          setAssentos(response.data.seats);
          
        });
      }, []);


    return (
        <div className = "telaAssentos">
            <span>Selecione o(s) assento(s)</span>

            <div className = "assentos">

                {assentos.map((assentos)=>
                    <div  className = "assento" key = {assentos.id}>
                        {assentos.name}
                    </div>
                )}            

            </div>
        </div>
    )
}