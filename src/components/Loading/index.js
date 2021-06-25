import { Container } from "./styles";
import imgLogo from "../../assets/logos/logo_fundo_roxo_png.png";

function Loading() {
    return (
        <Container>
            <img src={imgLogo}/>
            Carregando...
        </Container>
    );
}

export default Loading;