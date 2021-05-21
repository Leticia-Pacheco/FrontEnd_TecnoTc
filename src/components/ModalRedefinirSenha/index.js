import {ContainerModal, Overlay, Header, MensagemUsuario, InserirNovaSenha, ButtonRedefinirSenha} from "./styles";
import Logo from "../../assets/logos/logo_fundo_roxo_png.png";
import Input from "../Input";
import {useHistory} from "react-router";
import {useState} from "react";
import {api} from "../../service/api";
import {signIn} from "../../service/security";
import queryString from 'query-string'
import {useLocation} from "react-router";

function RedefinirSenha(props) {
    const history = useHistory();

    const location = useLocation();

    const params = queryString.parse(location.search);

    console.log(params.passwordToken);

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
            alert(error.response.data.error);
        }
    };
    return (
        <>
            <Overlay>
                <ModalRedefinirSenha>
                    <Header>
                        <img src={Logo} alt="Logo" title="Logo" />
                    </Header>

                    <h1>Recuperação de senha</h1>
                    <MensagemUsuario>
                        <p>Ah! Defina uma senha fácil de lembrar e de alta segurança para evitar esse processo de recuperação!</p>
                    </MensagemUsuario>

                    <InserirNovaSenha onSubmit={handleSubmit}>
                        <p>Nova senha:</p>

                        <Input
                            id="password"
                            value={user.password}
                            handler={handleInput}
                            type="password"
                            placeholder="Digite aqui sua senha"
                            required
                        />
                        <p>Repita a senha:</p>
                        <Input
                            id="validPassword"
                            placeholder="Confirmar Senha"
                            type="password"
                            onBlur={(e) => {
                                if(!validPassword()) alert('As senhas precisam ser iguais');
                            }}
                            value={user.validPassword}
                            handler={handleInput}
                            required
                        />
                        <ButtonRedefinirSenha>
                            <button>Redefinir senha</button>
                        </ButtonRedefinirSenha>
                    </InserirNovaSenha>
                </ModalRedefinirSenha >
            </Overlay >
        </>
    );
}

export default RedefinePassword;