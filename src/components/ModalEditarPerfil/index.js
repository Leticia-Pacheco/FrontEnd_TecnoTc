import { Overlay, ModalEditarPerfil, Header, ImagemUsuario, EditarImagemUsuario, Logo, EditarDados, ComponentEditarDados, } from "./styles";
import ImageUsuario from "../../assets/ImagesPerfis/image_perfil_professor.jpg";
import EditarFotoUsuario from "../../assets/ImagesPerfis/editar_foto_perfil.png";
import ImageLogo from "../../assets/logos/logo_fundo_roxo_png.png";
import { getUser } from "../../service/security";
import { api } from "../../service/api";
import { useState } from "react";

function EditProfile() {
    const [editPerfil, setEditPerfil] = useState({
        email: '',
        name: '',
        currentPassword: '',
        newPassword: '',
        repeatNewPassword: '',
    });

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        try {

            let user = getUser();
            console.log(user.token);

            let userRoute;

            if(user.userRole === "teacher")
                userRoute = "teachers"
            else
                userRoute = "students"    

            const response = await api.put(`/${userRoute}`, {
                name: editPerfil.name,
                email: editPerfil.email,
                currentPassword: editPerfil.currentPassword,
                newPassword: editPerfil.newPassword,
            });

            console.log(response);

        } catch (error) {
            console.error(error);
        }
    };

    const handleInput = (e) => {
        setEditPerfil({ ...editPerfil, [e.target.id]: e.target.value });
    };

    return (
        <Overlay>
            <ModalEditarPerfil>
                <Header>
                    <ImagemUsuario>
                        <img src={ImageUsuario} alt="Alterar imagem perfil de usuário" title="Alterar imagem perfil de usuário" />
                        <EditarImagemUsuario>
                            <button type="file">
                                <img src={EditarFotoUsuario} alt="Editar foto de perfil" title="Editar foto de perfil" />
                            </button>
                        </EditarImagemUsuario>
                    </ImagemUsuario>

                    <h3>Editar perfil pessoal</h3>

                    <Logo>
                        <img src={ImageLogo} alt="Logo da empresa" title="Logo da empresa" />
                    </Logo>
                </Header>

                <EditarDados onSubmit={handleSubmit}>
                    <ComponentEditarDados>
                        <p>Nome</p>
                        <input type="text" id="name" size="43" onChange={handleInput}
                            value={editPerfil.name} />
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>E-mail</p>
                        <input type="text" id="email" size="43" onChange={handleInput}
                            value={editPerfil.email} />
                        <span>Adicionar mais um e-mail +</span>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Instituição de ensino</p>
                        <input type="text" name="instituicaoEnsinoUsuario" value="Senai Prof Vicente Amato | Jandira" size="43" />
                        <span>Adicionar mais uma instituição de ensino +</span>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Você é</p>
                        <input type="text" id="role" value="Teacher" size="43" />
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Senha atual</p>
                        <input type="password" id="currentPassword" size="118" onChange={handleInput}
                            value={editPerfil.currentPassword} />
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Nova Senha</p>
                        <input type="password" id="newPassword" size="43" onChange={handleInput}
                            value={editPerfil.newPassword} />
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Repetir senha</p>
                        <input type="password" id="repeatNewPassword" size="43" onChange={handleInput} value={editPerfil.repeatNewPassword} />
                    </ComponentEditarDados>
                    <button>
                        <p>Salvar dados</p>
                    </button>
                </EditarDados>
            </ModalEditarPerfil>
        </Overlay>
    );
}

export default EditProfile;