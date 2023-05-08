import { UseContexto } from '../hooks';
import { time } from '../styles/theme';
import trevoTime from "../assets/trevo-timemania.png";
import { Principal } from '../components/Principal';
import { Carregando } from '../components/Carregamento';

function Timemania() {
    const { timemania } = UseContexto();

    return(
        <>
        <Carregando dataApuracao={timemania.dataApuracao} />
            <Principal
                trevo={trevoTime}
                alt="trevo-timemania"
                name="TIMEMANIA"
                color={time.loteria}
                colorPremio={time.estimativa}
                dataProximoConcurso={timemania.dataProximoConcurso}
                valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
                numeroDoConcurso={timemania.numeroDoConcurso}
                dataPorExtenso={timemania.dataPorExtenso}
                dezenas={timemania.dezenas}
                acumulado={timemania.acumulado}
            />
        </>
    )
}

export default Timemania;