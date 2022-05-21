import './style.css'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Sessoes(){

    const {idFilme} = useParams()

    const [sessao, setSessao] = useState([])    

    useEffect(() => {
        const promisse = axios.get(
          `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        );
    
        promisse.then((response) => {
          setSessao(response.data.days);
          
        });
      }, []);


    

      return( 

        <div className = "telaSessoes">
          <span> Selecione o horário</span>

          <div>

            {sessao.map((sessao)=>
              <div className = "sessoes" key = {sessao.id}>
                <span>{sessao.weekday} - {sessao.date}</span>

                <div className = "horarios">                  
                  {sessao.showtimes.map((hora)=>
                  <div className = "horario" key = {hora.id}>
                    <Link to={`/assentos/${hora.id}`}>                   
                      {hora.name}                   
                    </Link>
                  </div>                 
                  )}
                </div>

              </div>
            )}            
            
          </div>
        </div>         

      )

}