import { Container, IconSearch } from "./styles";

function InputSearch() {

  return(
    <Container>
      <input placeholder="Procurar contato" />
      <IconSearch/>
    </Container>
  );
}

export default InputSearch;