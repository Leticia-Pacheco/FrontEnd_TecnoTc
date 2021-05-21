import { Link } from "react-router-dom";
import { Container, Overlay } from "./styles";

function CreateAnotacoes () {
    return(
        <>
            <Overlay>
                <Container>
                    <h2>Criar uma anotação</h2>

                    <p>Crie sua equipe para que trabalhem em harmonia, mantendo uma boa comunicação e foco em seu projeto. 
                       Temos certeza que será eficaz!</p>

                    <span>Nome do grupo:</span>
                    <input type="text" placeholder="Digite o nome do grupo aqui"/>

                    <span>Descrição:</span>
                    <input type="text" placeholder="Digite a descrição do grupo aqui"/>
                    
                    <span>Adicionar membros:</span>
                    <input type="text" placeholder="Pesquise o e-mail do membro aqui"/>

                    <span>Escolha uma foto para identificação do grupo:</span>
                    <label for="arquivo">Adicionar imagem</label>
                    <input type="file" name="arquivo" id="arquivo"/>

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