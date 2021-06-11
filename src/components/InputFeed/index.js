import { Container } from "./styles";

/* ... = tudo que n foi value e handler vai para o rest */
function Input ({id, label, value, handler, ...rest}) {
    return (
        <Container>
            <input placeholder=" " />
            <label > {label} </label>
        </Container>
    )
}

export default Input;