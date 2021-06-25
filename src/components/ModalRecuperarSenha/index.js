import {Overlay, ModalRecuperarSenha, Header, ImageSenha, MensagemRecuperacaoSenha, InserirEmail, ButtonEnviarLink} from "./styles";
import Logo from "../../assets/logos/logo_fundo_roxo_png.png";
import CadeadoRecSenha from "../../assets/ImagesRecuperarSenha/cadeadoSenha.jpg";
<<<<<<< HEAD
import { Link } from "react-router-dom";

function RecoverPassword({ handleClose }) {
    return(
=======
import {useHistory} from "react-router-dom";
import {useState} from 'react';
import {api} from '../../service/api';
import {getUser} from '../../service/security';
import Input from '../Input';
import Alert from "../Alert";

function RecoverPassword() {
    const [message, setMessage] = useState(undefined);

    const history = useHistory();

    const [userEmail, setUserEmail] = useState('');

    const handleInput = (e) => {
        setUserEmail({...userEmail, [e.target.id]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const {email} = userEmail;

            const response = await api.get(`/emailpassword/${email}`);
            console.log(email);
            getUser(response.data);
            history.push('/orderconfirmemail');
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

                <ModalRecuperarSenha>
                    <Header>
                        <img src={Logo} alt="Logo" title="Logo"/>
                        <h1>Esqueceu sua senha?</h1>
                    </Header>

                    <ImageSenha>
                        <img src={CadeadoRecSenha} alt="Cadeado senha" title="Cadeado senha"/>
                    </ImageSenha>

                    <MensagemRecuperacaoSenha>
                        <p>
                        Está tudo bem! Será enviado um link para o seu e-mail assim que digitá-lo para que possa redefinir sua senha!
                        </p>
                    </MensagemRecuperacaoSenha>

                    <InserirEmail>
                        <p>Digite seu email: </p>
                        <input type="text" placeholder="Insira seu email aqui"></input>
                    </InserirEmail>
                    
                    <Link to="/">
                        <ButtonEnviarLink>
                            <button onClick={handleClose}>Enviar link de recuperação</button>
                        </ButtonEnviarLink>
                    </Link>
                </ModalRecuperarSenha>
            </Overlay>
        </>
    );
}

export default RecoverPassword;