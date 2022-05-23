import './style.css'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";




export default function Assentos(){
    let idReservado = [];
    let nome;
    let cpf; 
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
        if(opcao.classList.contains("selecionado")){
            opcao.classList.remove("selecionado")
        }else{
            opcao.classList.add("selecionado")
            // idReservado.push[i]
        }
    
        
    }     
    
    

    function Reservar(){
        const promisse = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`)

        nome = document.querySelector(".nome").value
        cpf = document.querySelector(".cpf").value
        let reserva = {
            // ids: idReservado,
            name: nome,
            cpf: cpf         
        }    
        console.log(reserva)      
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
                        <input className = "nome" type ="text" placeholder='Digite seu nome...'></input>
                    </div>
                    <div className = "dado">
                        <span>CPF do comprador:</span>
                        <input className = "cpf" type ="text" placeholder='Digite seu cpf...'></input>
                    </div>
                </div> 

                <Link to = {`/sucesso/${nome}`}>
                    <div className = "botao" onClick={Reservar}>Reservar Assento</div>       
                </Link>

            </div>
        </div>
    )


    
}

