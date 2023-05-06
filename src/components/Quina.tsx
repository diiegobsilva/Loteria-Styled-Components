import { UseContexto } from "../hooks";
import logoquina from '../assets/trevo-quina.png'
import "../styles/Quina.css";
import Quin from "../pages/Quin";

function Quina() {
    const {quina} = UseContexto();
    function Acumulou(){
        if(quina.acumulado == true){
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
                        src={logoquina}
                        alt='trevo-quina'
                    />
                    <div className='text-quina'>QUINA</div>
                </div>

                <p style={{marginLeft: '45px'}}>
                    Estimativa de prêmio do próximo <br/> concurso. Sorteio em {quina.dataProximoConcurso}:
                </p>

                <div className='text-premio'>
                    R${quina.valorEstimadoProximoConcurso}
                </div>

            </div>
            <div className='column'>
                {quina.dezenas.map((valor) => (
                    <>
                    <div className='circle'>{valor}</div>
                    </>
                 ))}
                 <div className='text-acc'>{Acumulou()}</div>
                <p>
                    Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}
                </p>
            </div>
        </div>
        <hr />
    </div>
    );
}
export default Quina;

