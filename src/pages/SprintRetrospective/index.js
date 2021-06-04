import { Container, Conteudo, Form } from "./styles";

function SprintRetrospective () {
    return(
        <Container>
            <Form>
                <Conteudo>
                    <h1>Sprint Retrospective</h1>

                    <p>Preencha corretamente todos os campos.</p>

                    <span>Nome do projeto</span>
                    <input type="text"/>

                    <span>O que foi feito?</span>
                    <textarea  placeholder="Escreva aqui o que foi feito com êxito"/>

                    <span>O que não foi feito?</span>
                    <textarea placeholder="Escreva aqui o que não foi feito"/>

                    <span>Plano de ação</span>
                    <textarea placeholder="Escreva aqui o plano de ação"/>

                    <button>Enviar Sprint Retrospective!</button>
                </Conteudo>
            </Form>
        </Container>
    );
}

export default SprintRetrospective