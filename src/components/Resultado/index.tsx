import styled from "styled-components";


export function Resultado({dezenas}:any){
    return(
        <>
        {dezenas && dezenas.map((valor:any) => (
            <Cicle>{valor.split("")}</Cicle> 
         ))}
         </> 
    )
}

const Cicle = styled.div`
    font-family: Roboto; 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    color: ${props =>props.theme.bolafonte};
    background: ${props =>props.theme.bola};
    font-weight: bold;
`;