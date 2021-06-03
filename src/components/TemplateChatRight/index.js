import { Container } from "./styles";
import { useEffect, useState } from "react";


function TemplateChatRight({ msg }) {

    return (
        <Container>
            <p> {msg.message}</p>
        </Container>
    )
}

export default TemplateChatRight;