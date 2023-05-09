import styled from "styled-components";

export function Data({numeroDoConcurso, dataPorExtenso}:any){

    return(
        <P> Concurso {numeroDoConcurso} {dataPorExtenso}</P>
    )
}

const P = styled.div`
    font-family: Roboto; 
    color:${props =>props.theme.data};
    font-size: 15px;
`;