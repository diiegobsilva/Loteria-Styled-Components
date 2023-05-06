import "../styles/Timemania.css";
import { UseContexto } from '../hooks';
import Timemania from '../components/Timemania';
import Loading from '../components/Loading';

function Time() {
    const { timemania } = UseContexto();

    return(
        <>
            {timemania.dataApuracao ? <Timemania/> : <Loading/>}
        </>
    )
}

export default Time;