import { UseContexto } from "../hooks";
import logotimemania from '../assets/trevo-timemania.png'
import "../styles/Timemania.css";

function Timemania() {
    const {timemania} = UseContexto();

function Acumulou(){
    if(timemania.acumulado == true){
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
                            src={logotimemania}
                            alt='trevo-timemania'
                        />
                        <div className='text-timemania'>TIMEMANIA</div>
                    </div>

                    <p style={{marginLeft: '45px'}}>
                        Estimativa de prêmio do próximo <br/> concurso. Sorteio em {timemania.dataProximoConcurso}:
                    </p>

                    <div className='text-time-premio'>
                        R${timemania.valorEstimadoProximoConcurso}
                    </div>

                </div>
                <div className='column'>
                    {timemania.dezenas.map((valor) => (
                        <>
                        <div className='circle-time'>{valor}</div>
                        </>
                     ))}
                    <div className='text-acc'>{Acumulou()}</div>
                    <p>
                        Concurso {timemania.numeroDoConcurso} {timemania.dataPorExtenso}
                    </p>
                </div>
            </div>
<hr />
        </div>
    
);
}
export default Timemania;

