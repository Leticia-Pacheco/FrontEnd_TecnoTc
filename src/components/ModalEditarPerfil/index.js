import { Overlay, ModalEditarPerfil, Header, ImagemUsuario, EditarImagemUsuario, Logo, EditarDados, ComponentEditarDados, } from "./styles";
import ImageUsuario from "../../assets/ImagesPerfis/image_perfil_professor.jpg";
import ImageLogo from "../../assets/logos/logo_fundo_roxo_png.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { getUser } from "../../service/security";
import { api } from "../../service/api";
import { useState } from "react";
>>>>>>> e10db548aed1035b815194c501f69a5a81d39298

function EditProfile() {
    
    const [editPerfil, setEditPerfil] = useState({
        email: '',
        name: '',
        currentPassword: '',
        newPassword: '',
        repeatNewPassword: '',
    });

    const validPassword = () =>
        editPerfil.newPassword === editPerfil.repeatNewPassword;

    const handleSubmit = async (e) => {

        if (!validPassword()) return alert('As senhas precisam ser iguais!');

        e.preventDefault();

        try {

            const user = getUser();
            console.log(user.token);
            let userRoute;

            if (user.userRole === "teacher")
                userRoute = "teachers"
            else
                userRoute = "students"

            const response = await api.put(`/${userRoute}`, {
                name: editPerfil.name,
                email: editPerfil.email,
                currentPassword: editPerfil.currentPassword,
                newPassword: editPerfil.newPassword,
            });
            
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
<<<<<<< HEAD
                            <label for="arquivo">Editar imagem</label>
                            <input type="file" name="arquivo" id="arquivo"/>
=======
                            <button type="file">
                                <img src={EditarFotoUsuario} alt="Editar foto de perfil" title="Editar foto de perfil" />
                            </button>
>>>>>>> e10db548aed1035b815194c501f69a5a81d39298
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
<<<<<<< HEAD
                        <input type="text" name="nomeUsuario" value="José Bezerra" size="46"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>E-mail</p>
                        <input type="text" name="emailUsuario" value="jose.bezerra@gmail.com" size="46"/>
=======
                        <input type="text" id="name" size="43" onChange={handleInput}
                            value={editPerfil.name} />
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>E-mail</p>
                        <input type="text" id="email" size="43" onChange={handleInput}
                            value={editPerfil.email} />
>>>>>>> e10db548aed1035b815194c501f69a5a81d39298
                        <span>Adicionar mais um e-mail +</span>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Instituição de ensino</p>
                        <input type="text" name="instituicaoEnsinoUsuario" value="Senai Prof Vicente Amato | Jandira" size="46"/>
                        <span>Adicionar mais uma instituição de ensino +</span>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Você é</p>
<<<<<<< HEAD
                        <input type="text" name="nivelUsuario" value="Professor" size="46"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Senha atual</p>
                        <input type="password" name="senhaUsuario" value="123456456789" size="115"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Nova Senha</p>
                        <input type="text" name="novaSenhaUsuario" value="" size="46"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Repetir senha</p>
                        <input type="text" name="confirmacaoNovaSenhaUsuario" value="" size="46"/>
                    </ComponentEditarDados>

                        <button>
                            <Link to="/profileteacher">
                                <p>Salvar dados</p>
                            </Link>
                        </button>
=======
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
>>>>>>> e10db548aed1035b815194c501f69a5a81d39298
                </EditarDados>
            </ModalEditarPerfil>
        </Overlay>
    );
}

export default EditProfile;