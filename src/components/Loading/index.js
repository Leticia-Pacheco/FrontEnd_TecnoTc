import { Container } from "./styles";
import imgLogo from "../../assets/load.png";

function Loading() {
    return (
        <Container>
            <img src={imgLogo}/>
            Carregando...
        </Container>
    );
}

export default Loading;