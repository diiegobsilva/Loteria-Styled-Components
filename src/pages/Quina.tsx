import { UseContexto } from '../hooks';
import { Principal } from "../components/Principal";
import { quin } from '../styles/theme';
import trevoQuina from "../assets/trevo-quina.png";


function Quina() {
    const { quina } = UseContexto();

    return(
        <Principal
            trevo={trevoQuina}
            alt="trevo-quina"
            name="QUINA"
            color={quin.loteria}
            colorPremio={quin.estimativa}
            dataProximoConcurso={quina.dataProximoConcurso}
            valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
            numeroDoConcurso={quina.numeroDoConcurso}
            dataPorExtenso={quina.dataPorExtenso}
            dezenas={quina.dezenas}
            acumulado={quina.acumulado}
        />
    )
}

export default Quina;