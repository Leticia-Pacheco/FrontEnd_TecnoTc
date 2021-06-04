import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { api } from "../../service/api";
import { Container, Conteudo, Form } from "./styles";

function SprintDaily() {

    const [sprintDaily, setSprintDaily] = useState({
        doneYesterday: '',
        goingToDoDay: '',
        someObstacle: '',
    });
    const [message, setMessage] = useState(undefined)

    const [sprint, setSprint] = useState([]);

    const { sprintId } = useParams();

    const history = useHistory();

    const findSprint = async () => {

        const response = await api.get(`/sprints/${sprintId}`);
        console.log(response.data)

        if (!response.data)
            return history.push("/profile")
        setSprint(response.data.Group)

        console.log(response.data.Group)
    }

    useEffect(() => {
        findSprint();
    }, [])

    const handleInput = (e) => {
        setSprintDaily({ ...sprintDaily, [e.target.id]: e.target.value });
    }

    const createSprintDaily = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post(`/dailyScrum/${sprintId}`, {
                doneYesterday: sprintDaily.doneYesterday,
                goingToDoDay: sprintDaily.goingToDoDay,
                someObstacle: sprintDaily.someObstacle
            });

            setMessage({ title: "Tudo certo", description: "Reunião diaria criada" });
        } catch (error) {
            console.error(error);
            setMessage({ title: "algo deu errado", description: error.response.data.error });
        }
    }

    return (
        <Container>
            <Form>
                <Conteudo>
                    <h1>Sprint Diária</h1>

                    <p>Preencha corretamente todos os campos.</p>

                    <span>Nome do projeto</span>
                    <input type="text" />

                    <span>O que você fez ontem?</span>
                    <textarea id="doneYesterday" placeholder="Escreva aqui o que foi feito ontem por você" onChange={handleInput} />

                    <span>O que fará hoje?</span>
                    <textarea id="goingToDoDay" placeholder="Escreva aqui o que você fará hoje" onChange={handleInput} />

                    <span>Houve algum conflito em seu grupo?</span>
                    <textarea id="someObstacle" placeholder="Escreva aqui se houve algum conflito em seu grupo" onChange={handleInput}/>

                    <button onClick={createSprintDaily}>Enviar sua Sprint Diária!</button>
                </Conteudo>
            </Form>
        </Container>
    );
}

export default SprintDaily