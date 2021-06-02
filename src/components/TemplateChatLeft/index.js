import { useEffect, useState } from "react";
import { Container } from "./styles";

function TemplateChatLeft({msg}) {

    const [message, setMessage] = useState([])

    useEffect(() => {
        setMessage(msg);
    }, [message]);
    
    return (
        <Container>
            <p>  {message.message ? message.message : message.text}</p>
        </Container>
    )
}

export default TemplateChatLeft;