import { UseContexto } from '../hooks';
import { Principal } from "../components/Principal";
import { mega } from '../styles/theme';
import trevoMega from "../assets/trevo-megasena.png";


function Megasena() {
    const {megasena} = UseContexto();

    return(
        <Principal
            trevo={trevoMega}
            alt="trevo-megasena"
            name="MEGA-SENA"
            color={mega.loteria}
            colorPremio={mega.estimativa}
            dataProximoConcurso={megasena.dataProximoConcurso}
            valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
            numeroDoConcurso={megasena.numeroDoConcurso}
            dataPorExtenso={megasena.dataPorExtenso}
            dezenas={megasena.dezenas}
            acumulado={megasena.acumulado}
        />
    )   
}

export default Megasena;