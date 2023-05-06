import styled from 'styled-components';

export function NomeLoteria({ trevo, alt, color, name }: any) {
    return (
        <Div>
            <Trevo>
                <img src={trevo} alt={alt} />
            </Trevo>
            <Text style={{ color: color }}>{name}</Text>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
`

const Trevo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`

const Text = styled.div`
    font-family: Roboto;  
    margin-left: 10px;
    color: #209869;
    font-weight: bold;
    font-size: x-large;
`