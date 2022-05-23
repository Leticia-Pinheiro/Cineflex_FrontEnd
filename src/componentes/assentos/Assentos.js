import './style.css'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

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


    function Selecao(i){
        
        
        let opcao = document.getElementById(i)        
        {(opcao.classList.contains("selecionado"))? 
        opcao.classList.remove("selecionado"):
        opcao.classList.add("selecionado")}       
    }


    return (
        <div className = "telaAssentos">
            <span>Selecione o(s) assento(s)</span>

            <div className = "assentos">

                {assentos.map((assentos)=>
                    <div className = {(assentos.isAvailable === true)? "assento seatDisponivel": "assento seatIndisponivel"} key = {assentos.id} id = {assentos.id} onClick = {()=>Selecao(assentos.id)} >                    
                        {assentos.name}
                    </div>             
                )}  

                   


                <div className = "legendas">
                    <div className ="legenda">
                        <div className = "lgSelecionado"></div>
                        <span>Selecionado</span>
                    </div>
                    <div className ="legenda">
                        <div className = "lgDisponivel"></div>
                        <span>Disponível</span>
                    </div>
                    <div className ="legenda">
                        <div className = "lgIndisponivel"></div>
                        <span>Indisponível</span>
                    </div>
                </div>  

                <div className = "dados">
                    <div className = "dado">
                        <span>Nome do comprador:</span>
                        <input type ="text" placeholder='Digite seu nome...'></input>
                    </div>
                    <div className = "dado">
                        <span>CPF do comprador:</span>
                        <input type ="text" placeholder='Digite seu cpf...'></input>
                    </div>
                </div> 

                <div className = "botao">Reservar Assento</div>       

            </div>
        </div>
    )


    
}

