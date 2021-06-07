import { Link } from "react-router-dom";
import { Container, Overlay } from "../ModalCriarAnotacoes/styles";

function CreateAnotacoes () {
    return(
        <>
            <Overlay>
                <Container>
                    <h2>Criar uma anotação</h2>

                    <p>As anotações servem para que você se oriente durante o processo de construção de seu projeto. 
                       Elas são úteis para que não se esqueça das tarefas mais importantes! Fique atento!</p>

                    <span>Título da anotação:</span>
                    <input type="text" placeholder="Digite o título da anotação aqui"/>

                    <span>Descrição:</span>
                    <textarea rows="7" cols="100" placeholder="Digite a descrição da anotação aqui"></textarea>
                    <button>
                        <Link to="/profileteacher">
                            Criar anotação
                        </Link>
                    </button>
                </Container>
            </Overlay>
        </>
    )
}

export default CreateAnotacoes;