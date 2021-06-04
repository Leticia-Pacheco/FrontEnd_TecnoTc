import { Container, Conteudo, Form } from "./styles";

function SprintRetrospective () {
    return(
        <Container>
            <Form>
                <Conteudo>
                    <h1>Sprint Diária</h1>

                    <p>Preencha corretamente todos os campos.</p>

                    <span>Nome do projeto</span>
                    <input type="text"/>

                    <span>O que você fez ontem?</span>
                    <textarea  placeholder="Escreva aqui o que foi feito ontem por você"/>

                    <span>O que fará hoje?</span>
                    <textarea placeholder="Escreva aqui o que você fará hoje"/>

                    <span>Houve algum conflito em seu grupo?</span>
                    <textarea placeholder="Escreva aqui se houve algum conflito em seu grupo"/>

                    <button>Enviar sua Sprint Diária!</button>
                </Conteudo>
            </Form>
        </Container>
    );
}

export default SprintRetrospective