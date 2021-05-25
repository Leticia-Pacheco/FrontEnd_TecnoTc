import {Container, Overlay} from "./styles";

function CreateGroups({handleClose}) {
    return (
        <>
            <Overlay>
                <Container>
                    <span onClick={handleClose}>X</span>
                    <h2>Criar um grupo</h2>

                    <p>Crie sua equipe para que trabalhem em harmonia, mantendo uma boa comunicação e foco em seu projeto.
   Temos certeza que será eficaz!</p>

                    <h3>Nome do grupo:</h3>
                    <input type="text" placeholder="Digite o nome do grupo aqui" />

                    <h3>Descrição:</h3>
                    <input type="text" placeholder="Digite a descrição do grupo aqui" />

                    <h3>Adicionar membros:</h3>
                    <input type="text" placeholder="Pesquise o e-mail do membro aqui" />

                    <h3>Escolha uma foto para identificação do grupo:</h3>
                    <label for="arquivo">Adicionar imagem</label>
                    <input type="file" name="arquivo" id="arquivo" />

                    <button>
                        Criar grupo
                    </button>
                </Container>
            </Overlay>
        </>
    )
}

export default CreateGroups;