import { UseContexto } from "../hooks";
import logomegasena from '../assets/trevo-megasena.png'
import "../styles/Megasena.css";

function Megasena() {
    const {megasena} = UseContexto();

function Acumulou(){
    if(megasena.acumulado == true){
        return(
            <div className='text-acc'>ACUMULOU!</div>
        )
    }else{
        return( 
            <div className='text-acc'>NÃO ACUMULOU!</div>
            )
    }
}    

    return (
        
        <div>
            <div className='row'>
                <div className='column'>
                    <div className='image-trevo'>
                        <img
                            src={logomegasena}
                            alt='trevo-megasena'
                        />
                        <div className='text-megasena'>MEGA-SENA</div>
                    </div>

                    <p style={{marginLeft: '45px'}}>
                        Estimativa de prêmio do próximo <br/> concurso. Sorteio em {megasena.dataProximoConcurso}:
                    </p>

                    <div className='text-mega-premio'>
                        R${megasena.valorEstimadoProximoConcurso}
                    </div>

                </div>
                <div className='column'>
                    {megasena.dezenas.map((valor) => (
                        <>
                        <div className='circle-mega'>{valor}</div>
                        </>
                     ))}
                    <div className='text-acc'>{Acumulou()}</div>
                    <p>
                        Concurso {megasena.numeroDoConcurso} {megasena.dataPorExtenso}
                    </p>
                </div>
            </div>
<hr />
        </div>
    
);
}
export default Megasena;

