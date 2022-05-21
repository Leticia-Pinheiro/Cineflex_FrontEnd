import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./cabecalho/Cabecalho"
import Inicio from "./inicio/Inicio"
import Sessoes from "./sessoes/Sessoes";
import Assentos from "./assentos/Assentos";
import '../assets/styles/reset.css'
import '../assets/styles/styles.css'

export default function App(){
    return(
        <>
        <Cabecalho />

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos />} />
            </Routes>
        </BrowserRouter>
        </>       
        
    )
}


