import {Container} from './styles';

function Input({id, label, value, handler, placeholder, ...rest}) {
  return (
    <Container>
      <input
        id={id}
        {...rest}
        placeholder={placeholder}
        value={value}
        onChange={handler}
      />
    </Container>
  );
}

export default Input;
