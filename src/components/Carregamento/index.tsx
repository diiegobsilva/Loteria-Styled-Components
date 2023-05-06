import styled from "styled-components"

export function Carregamento(){
    return(
        <Text>
            Carregando....
        </Text>
    )
}
const Text = styled.p`
    font-family: Roboto; 
    font-size: x-large;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
`