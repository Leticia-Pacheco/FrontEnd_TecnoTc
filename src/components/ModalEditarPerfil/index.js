import {Overlay, ModalEditarPerfil, Header, ImagemUsuario, EditarImagemUsuario, Logo, EditarDados, } from "./styles";
import ImageUsuario from "../../assets/ImagesPerfis/image_perfil_professor.jpg";
import EditarFotoUsuario from "../../assets/ImagesPerfis/editar_foto_perfil.png";
import ImageLogo from "../../assets/logos/logo_fundo_roxo_png.png";

function EditProfile() {
    return(
        <Overlay>
            <ModalEditarPerfil>
                <Header>
                    <ImagemUsuario>
                        <img src={ImageUsuario} alt="Alterar imagem perfil de usuário" title="Alterar imagem perfil de usuário"/>
                        <EditarImagemUsuario>
                            <img src={EditarFotoUsuario} alt="Editar foto de perfil" title="Editar foto de perfil"/>
                        </EditarImagemUsuario>
                    </ImagemUsuario>

                    <h3>Editar perfil pessoal</h3>

                    <Logo>
                        <img src={ImageLogo} alt="Logo da empresa" title="Logo da empresa"/>
                    </Logo>
                </Header>

                <EditarDados></EditarDados>
            </ModalEditarPerfil>
        </Overlay>
    );
}

export default EditProfile;