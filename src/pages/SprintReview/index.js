import { useParams } from "react-router";
import { Container, Conteudo, Form } from "./styles";

function SprintRetrospective () {


    const {groupId} = useParams();

    console.log(groupId)

    return(
        <Container>
            <Form>
                <Conteudo>
                    <h1>Sprint Review</h1>

                    <p>Preencha corretamente todos os campos.</p>

                    <span>Nome do projeto</span>
                    <input type="text"/>

                    <span>Funcionalidades entregues</span>
                    <textarea  placeholder="Escreva aqui as funcionalidades entregues"/>

                    <span>Feedback</span>
                    <textarea placeholder="Escreva aqui o que não foi feito"/>

                    <button>Enviar sua Sprint Review!</button>
                </Conteudo>
            </Form>
        </Container>
    );
}

export default SprintRetrospective