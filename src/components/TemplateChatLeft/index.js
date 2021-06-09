import { useEffect, useState } from "react";
import { Container } from "./styles";

function TemplateChatLeft({ msg }) {
    return (
        <Container>
            <p>  {msg.message}</p>
        </Container>
    )
}

export default TemplateChatLeft;