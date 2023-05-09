import styled from "styled-components";

    export function Estimativa({dataProximoConcurso, valorEstimadoProximoConcurso, colorPremio }:any){
    return(
        <Div>
            <P> Estimativa de prêmio do próximo <br/> concurso. Sorteio em {dataProximoConcurso}:</P>
            
            <TextPremio style={{color: colorPremio }}> R${valorEstimadoProximoConcurso} </TextPremio>
        </Div>
    )
}
const P = styled.p`
    font-family: "Roboto";
    color: #4c556c;
    font-size: small;
`;

const Div = styled.div`
    margin-left:50px;
    max-width: 400px;
`;

const TextPremio = styled.div`
    font-family: Roboto; 
    color: ${props =>props.theme.estimativa};
    font-weight: bold;
    font-size: large;

`;