import { Container } from "./styles";
import { useEffect, useState } from "react";


function TemplateChatRight({ msg }) {

    const [message, setMessage] = useState([])

    useEffect(() => {
        setMessage(msg);
    });
    return (
        <Container>
            <p> {message.message ? message.message : message.text}</p>
        </Container>
    )
}

export default TemplateChatRight;