import {Container, RegisterUsuary, Logo, ApresentacaoEmpresa, NivelUsuario, OpcaoNivelUsuario, InputCadastrar, TextLogin} from "./styles";
import GifProfessores from "../../assets/ImagesRegister/GifProfessores.gif";
import GifAlunos from "../../assets/ImagesRegister/GifAlunos.gif";
import GifOutros from "../../assets/ImagesRegister/GifOutros.gif";
import UsuaryRegister from "../../components/InputsRegister";


function Register () {
    return(
        // <>
            <Container>
                <RegisterUsuary>
                    <Logo>
                        <p>Logo da empresa</p>
                    </Logo>

                    <ApresentacaoEmpresa>
                        <span>TecnoTc</span>
                        <p>Junte-se à nossa comunidade!</p>
                    </ApresentacaoEmpresa>

                        <p>Você é:</p>
                    <NivelUsuario>
                        <OpcaoNivelUsuario>
                            <img src={GifProfessores} alt="Identificação" title="Identificação"/>
                            <p>Professor</p>
                        </OpcaoNivelUsuario>
                        <OpcaoNivelUsuario>
                            <img src={GifAlunos} alt="Identificação" title="Identificação"/>
                            <p>Aluno</p>
                        </OpcaoNivelUsuario>
                        <OpcaoNivelUsuario>
                            <img src={GifOutros} alt="Identificação" title="Identificação"/>
                            <p>Outro</p>
                        </OpcaoNivelUsuario>
                    </NivelUsuario>

                    <UsuaryRegister/>

                    <InputCadastrar>
                        <p>Cadastrar</p>
                    </InputCadastrar>
                    <TextLogin>
                        <p>Já possui uma conta? <span>Entre agora!</span></p>
                    </TextLogin>
                </RegisterUsuary>
            </Container>
        //</>
    ); 
}

export default Register;