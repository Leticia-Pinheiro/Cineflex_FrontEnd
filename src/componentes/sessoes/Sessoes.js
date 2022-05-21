import './style.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
              <span>Selecione o horário</span>

              <div className = "sessoes">
                  
                  {sessao.map(sessao => 
                    <div key = {sessao.id} className = "sessaoDia">
                        
                            
                            <span>{sessao.weekday} - {sessao.date}</span>
                            <div className = "horario">
                                
                            </div>
                        
                        
                    </div>)}
                  
              </div>

          </div>

      )

}