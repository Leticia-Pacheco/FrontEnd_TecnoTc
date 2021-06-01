import { Container } from "./styles";
import { useEffect, useState } from "react";


function TemplateChatRight({ msg }) {

    const [message, setMessage] = useState([])

    useEffect(() => {
        setMessage(msg);
    });
    return (
        <Container>
            <p> {message.message}</p>
        </Container>
    )
}

export default TemplateChatRight;