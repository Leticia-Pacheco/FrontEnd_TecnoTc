import {useState} from "react";
import Input from "../Input";
import {api} from "../../service/api";
import {Container, Overlay} from "./styles";
import {signIn} from "../../service/security";

function CreateAnotacoes({handleClose}) {
    const [newAnnotation, setAnnotation] = useState({
        title: "",
        text: "",
    });
    const handlFunctionFecharModal = () => handleClose;
    const handleInput = (e) => {
        setAnnotation({...newAnnotation, [e.target.id]: e.target.value});
    };
    const handleAddAnnotation = async (e) => {
        e.preventDefault();

        try {
            const {title, text} = newAnnotation;

            const response = await api.post('/annotations', {
                title,
                text
            });

            signIn(response.data);
            handlFunctionFecharModal();
        } catch(error) {
            console.error(error);
            alert(error.response.data.error);
        }

    };
    return (
        <>
            <Overlay>
                <Container onSubmit=
                    {
                        handleAddAnnotation
                        &&
                        handlFunctionFecharModal
                    }>
                    <span onClick={handleClose}>X</span>
                    <h2>Criar uma anotação</h2>

                    <p>As anotações servem para que você se oriente durante o
                    processo de construção de seu projeto.
                    Elas são úteis para que não se esqueça das tarefas mais
                    importantes! Fique atento!
                    </p>

                    <h3>Título da anotação:</h3>
                    <Input
                        id="title"
                        placeholder="Digite o título da anotação aqui"
                        value={newAnnotation.title}
                        handler={handleInput}
                        required
                    />

                    <h3>Descrição:</h3>
                    <Input
                        id="text"
                        handler={handleInput}
                        value={newAnnotation.text}
                        placeholder="Digite a descrição da anotação aqui"
                        required></Input>
                    <button>
                        Criar anotação
                    </button>
                </Container>
            </Overlay>
        </>
    )
}

export default CreateAnotacoes;