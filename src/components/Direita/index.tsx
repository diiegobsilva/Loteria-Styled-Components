import styled from "styled-components";
import { Resultado } from "../Resultado";
import { Acumulou } from "../Acumulou";
import { Data } from "../Data";


export function Direita({ dezenas, acumulado, numeroDoConcurso, dataPorExtenso, color}: any) {
    return (
        <Div>
            <Resultado dezenas={dezenas} color={color}/>
            <Acumulou acumulado={acumulado}/>
            <Data numeroDoConcurso={numeroDoConcurso} dataPorExtenso={dataPorExtenso} />
        </Div>
    );
}

const Div = styled.div`
    margin-left:125px;
`;