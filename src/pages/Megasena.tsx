import { UseContexto } from '../hooks';
import { Principal } from "../components/Principal";
import { mega } from '../styles/theme';
import trevoMega from "../assets/trevo-megasena.png";
import { Carregando } from '../components/Carregamento';
import { ThemeProvider } from 'styled-components';


function Megasena() {
    const {megasena} = UseContexto();

    return(
        <>
        <ThemeProvider theme={mega}>
            <Carregando dataApuracao={megasena.dataApuracao} />
            <Principal
                trevo={trevoMega}
                alt="trevo-megasena"
                name="MEGA-SENA"
                colorPremio={mega.estimativa}
                dataProximoConcurso={megasena.dataProximoConcurso}
                valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
                numeroDoConcurso={megasena.numeroDoConcurso}
                dataPorExtenso={megasena.dataPorExtenso}
                dezenas={megasena.dezenas}
                acumulado={megasena.acumulado}
            />
            
            </ThemeProvider>
        </>
    )   
}

export default Megasena;