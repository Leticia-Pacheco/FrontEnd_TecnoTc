import {Container, Overlay} from "./styles";

function CreateAnotacoes({handleClose}) {
    return (
        <>
            <Overlay>
                <Container>
                    <span onClick={handleClose}>X</span>

                    <h2>Criar uma anotação</h2>

                    <p>As anotações servem para que você se oriente durante o processo de construção de seu projeto.
                    Elas são úteis para que não se esqueça das tarefas mais importantes! Fique atento!
                    </p>

                    <h3>Título da anotação:</h3>
                    <input type="text" placeholder="Digite o título da anotação aqui" />

                    <h3>Descrição:</h3>
                    <textarea rows="7" placeholder="Digite a descrição da anotação aqui"></textarea>
                    <button>
                        Criar anotação
                    </button>
                </Container>
            </Overlay>
        </>
    )
}

export default CreateAnotacoes;