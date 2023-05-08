import { UseContexto } from '../hooks';
import { Principal } from "../components/Principal";
import { mega } from '../styles/theme';
import trevoMega from "../assets/trevo-megasena.png";
import { Carregando } from '../components/Carregamento';


function Megasena() {
    const {megasena} = UseContexto();

    return(
        <>
            <Carregando dataApuracao={megasena.dataApuracao} />
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
        </>
    )   
}

export default Megasena;