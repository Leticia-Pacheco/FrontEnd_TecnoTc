import { ModalRedefinirSenha, Overlay, Header, MensagemUsuario, InserirNovaSenha, ButtonRedefinirSenha } from "./styles";
import Logo from "../../assets/logos/logo_fundo_roxo_png.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";

function RedefinePassword () {
    return(
=======
import Input from "../Input";
import {useHistory} from "react-router";
import {useState} from "react";
import {api} from "../../service/api";
import {signIn} from "../../service/security";
import queryString from 'query-string'
import {useLocation} from "react-router";
import Alert from "../Alert";

function RedefinirSenha(props) {
    const history = useHistory();

    const location = useLocation();

    const params = queryString.parse(location.search);

    console.log(params.passwordToken);
    const [message, setMessage] = useState(undefined);

    const [user, setUser] = useState({
        password: '',
        validPassword: '',
    });
    const handleInput = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    };

    const validPassword = () =>
        user.password === user.validPassword;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validPassword()) return alert('As senhas precisam ser iguais!');

        try {

            const response = await api.put(`/passwordreset?passwordToken=${params.passwordToken}`,
                {
                    password: user.password
                },
            );

            signIn(response.data);
            console.log(response.data);
            history.push('/');
        } catch(error) {
            console.error(error);
            setMessage({title: 'Ops...', description: error.response.data.error});

        }
    };
    return (
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
        <>
            <Overlay>
                <Alert message={message} type="error" handleClose={setMessage} />

                <ModalRedefinirSenha>
                    <Header>
                        <img src={Logo} alt="Logo" title="Logo"/>
                    </Header>

                    <h1>Recuperação de senha</h1>
                    <MensagemUsuario>
                        <p>Ah! Defina uma senha fácil de lembrar e de alta segurança para evitar esse processo de recuperação!</p>
                    </MensagemUsuario>

                    <InserirNovaSenha>
                        <p>Nova senha:</p>
                        <input type="text" placeholder="Insira a nova senha"/>
                    </InserirNovaSenha>
                    <InserirNovaSenha>
                        <p>Repita a senha:</p>
                        <input type="text" placeholder="Insira novamente sua senha"/>
                    </InserirNovaSenha>

                    <Link to="/">
                        <ButtonRedefinirSenha>
                            <button>Redefinir senha</button>
                        </ButtonRedefinirSenha>
                    </Link>
                </ModalRedefinirSenha>
            </Overlay>
        </>
    );
}

export default RedefinePassword;