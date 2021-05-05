<<<<<<< HEAD
import { Container } from './styles';

function Input({ id, label, value, handler, placeholder, ...rest }) {
=======
import {Container} from './styles';

function Input({id, label, value, handler, placeholder, ...rest}) {
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
  return (
    <Container>
      <input
        id={id}
        {...rest}
        placeholder={placeholder}
        value={value}
        onChange={handler}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

export default Input;
