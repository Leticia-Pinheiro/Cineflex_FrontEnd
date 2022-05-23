import './style.css'
import { Link, useParams } from "react-router-dom";

export default function Sucesso(){

    const {nomeComprador} = useParams()
    // const {cpfComprador} = useParams()

    return(
        <div className = "telaSucesso">
            <span>Pedido feito com sucesso!</span>
            

            <div className = "informacoes">
                <div className = "informacao">
                    <span>Filme e sessão</span>
                </div>

                <div className = "informacao">
                    <span>Ingressos</span>
                </div>

                <div className = "informacao">
                    <span>Comprador</span>
                    <p>{nomeComprador}</p>
                    
                </div>          
                
                
            </div>

        </div>

    )
}
