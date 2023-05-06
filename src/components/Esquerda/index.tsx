import styled from "styled-components";
import { Acumulou } from "../Acumulou";
import { Data } from "../Data";
import { Estimativa } from "../Estimativa";
import { NomeLoteria } from "../NomeLoteria";


export function Esquerda({ dataProximoConcurso, valorEstimadoProximoConcurso, trevo, alt, color, name , colorPremio}: any) {
    return (
        <Div>
            <NomeLoteria trevo={trevo} alt={alt} name={name} color={color} />
            <Estimativa dataProximoConcurso={dataProximoConcurso} valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} colorPremio={colorPremio}/>
        </Div>
    );
}

const Div = styled.div`
`;