import {Container} from "./styles";

function Tag({info, handleClose}) {
    return (
        <Container>
            {info}
            <span onClick={handleClose}>&times;</span>
        </Container>
    );
};

export default Tag;