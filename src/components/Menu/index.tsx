import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const mega = {
    cor: "#209869"
}
const quina = {
    cor: "#260085"
}
const time = {
    cor: "#00ff48"
}

const Props = {
    cor: "#ddd"
}

export default function Menu() {
    const linkAtual = useLocation()
    return(
        <NavbarContainer >
            <Text theme={linkAtual.pathname === "/timemania"? Props: time} to={"/timemania"}> Timemania</Text>
            <Text  theme={linkAtual.pathname === "/megasena"? Props: mega} to={"/megasena"} > Megasena</Text>
            <Text  theme={linkAtual.pathname === "/quina"? Props: quina} to={"/quina"} > Quina</Text>
        </NavbarContainer >
    )
}

const NavbarContainer  = styled.div`
    margin-top: 15px;
    margin-left: 25px;
    margin-bottom: 30px;

`

const Text = styled(Link)`
    color: ${props =>props.theme.cor};
    font-family: Roboto;
    text-decoration: none;
    margin-left: 25px;
    font-weight: bold;
    font-size: large;
`