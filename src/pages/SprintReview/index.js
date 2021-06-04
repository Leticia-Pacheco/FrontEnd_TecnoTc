import { Container, Conteudo, Form } from "./styles";

function SprintRetrospective () {
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

                    <span>Feedback do Product Owner (P.O)</span>
                    <textarea placeholder="Escreva aqui o que não foi feito"/>

                    <span>Novas tarefas para o Product Backlog</span>
                    <textarea placeholder="Escreva novas tarefas para o Product Backlog aqui"/>

                    <button>Enviar sua Sprint Review!</button>
                </Conteudo>
            </Form>
        </Container>
    );
}

export default SprintRetrospective