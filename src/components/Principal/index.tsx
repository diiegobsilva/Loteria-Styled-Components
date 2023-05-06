import styled from "styled-components";
import { Esquerda } from "../Esquerda";
import { Direita } from "../Direita";

export function Principal( {dataProximoConcurso, valorEstimadoProximoConcurso, trevo, alt, name , colorPremio,  dezenas, acumulado, numeroDoConcurso, dataPorExtenso,color}  : any){
    return(
        <Div>
            <Esquerda trevo={trevo} alt={alt} color={color} name={name} dataProximoConcurso={dataProximoConcurso} 
                valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} colorPremio={colorPremio} />
            <Direita  dezenas={dezenas} color={color} acumulado={acumulado} numeroDoConcurso={numeroDoConcurso} dataPorExtenso={dataPorExtenso} />
        </Div>
    )
}

const Div = styled.div`
    display: flex;
`;