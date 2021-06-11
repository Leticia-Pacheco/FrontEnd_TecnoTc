import {Container} from "./styles";
function TemplateChatRight({msg}) {

    return (
        <Container>
            <p> {msg.message}</p>
        </Container>
    )
}

export default TemplateChatRight;