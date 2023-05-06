import styled from "styled-components";

export function Acumulou(acumulou:any){

        if(acumulou == true){
            return(
                <TextACC>ACUMULOU!</TextACC>
            )
        }else{
            return( 
                <TextACC>NÃO ACUMULOU!</TextACC>
                )
        }

}
const TextACC = styled.div`
    color: #0066b3;
    margin-top: 15px;
    font-size: 30px;
    font-weight: bold;
`;