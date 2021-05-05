import { 
    Container, 
    Footer,
    Header, 
    InformacoesAluno, 
    Logo, 
    Perfil, 
    Grupos, 
    GruposComponents, 
    GruposIndividuais, 
    ImageGrupo, 
    ImageGrupo2,
    ConfiguracaoGrupos, 
    Anotacoes,
    ItensAnotacoes,
    ItensAnotacoes1,
    ItensAnotacoes2,
    ItensAnotacoes3,
    ItensAnotacoes4,
    ItensAnotacoes5,
    ItensAnotacoes6,
    Menu,
} from "./styles";
import ImagePerfilAluno from "../../assets/ImagesPerfis/image_perfil_professor.jpg";
import ImageLogo from "../../assets/logos/logo_fundo_roxo_png.png";
import ImageMenu from "../../assets/ImagesGerais/iconeMenu.png";
import ImageConfigGrupos from "../../assets/ImagesPerfis/configuracao_grupos.png";
import ImageOpcao from "../../assets/ImagesGerais/opcaoTresPontos.png";

function PerfilProf() {
    return (
        <>
            <Header>
                <p>Perfil pessoal</p>
                <InformacoesAluno>
                    <img src={ImagePerfilAluno} alt="Imagem de perfil do aluno" title="Imagem de perfil do aluno" />
                    <p>José Bezerra</p>
                    <p>Senai Prof Vicente Amato | Jandira</p>
                    <input type="submit" value="Editar perfil" />
                </InformacoesAluno>
                <Logo>
                    <img src={ImageLogo} alt="Logo" title="Logo" />
                </Logo>
            </Header>
            <Menu>
                <img src={ImageMenu} alt="Menu" title="Menu"/>
            </Menu>
            <Container>
                <Perfil>
                    <Grupos>
                        <h3>Meus grupos</h3>

                        <GruposComponents>
                            <GruposIndividuais>
                                <ConfiguracaoGrupos>
                                    <img src={ImageConfigGrupos} alt="Configurar Grupos" title="Configurar Grupos" />
                                </ConfiguracaoGrupos>
                                <ImageGrupo>
                                    <p>DS</p>
                                </ImageGrupo>
                                <p>Desenvolvimento de Sistemas</p>
                            </GruposIndividuais>

                            <GruposIndividuais>
                                <ConfiguracaoGrupos>
                                    <img src={ImageConfigGrupos} alt="Configurar Grupos" title="Configurar Grupos" />
                                </ConfiguracaoGrupos>
                                <ImageGrupo2>
                                    <p>RC</p>
                                </ImageGrupo2>
                                <p>Redes de Computadores</p>
                            </GruposIndividuais>

                            <GruposIndividuais>
                                <ConfiguracaoGrupos>
                                    <img src={ImageConfigGrupos} alt="Configurar Grupos" title="Configurar Grupos" />
                                </ConfiguracaoGrupos>
                                <ImageGrupo2>
                                    <p>MA</p>
                                </ImageGrupo2>
                                <p>Manutenção Automotiva</p>
                            </GruposIndividuais>

                            <GruposIndividuais>
                                <ConfiguracaoGrupos>
                                    <img src={ImageConfigGrupos} alt="Configurar Grupos" title="Configurar Grupos" />
                                </ConfiguracaoGrupos>
                                <ImageGrupo>
                                    <p>EL</p>
                                </ImageGrupo>
                                <p>Eletroeletrônica</p>
                            </GruposIndividuais>
                        </GruposComponents>
                    </Grupos>

                    <Anotacoes>
                        <h3>Minhas Anotações</h3>

                        <ItensAnotacoes>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes>
                        <ItensAnotacoes1>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes1>
                        <ItensAnotacoes2>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes2>
                        <ItensAnotacoes3>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes3>
                        <ItensAnotacoes4>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes4>
                        <ItensAnotacoes5>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes5>
                        <ItensAnotacoes6>
                            <p>22-04-2021 ReactJs</p>
                            <img src={ImageOpcao} alt="Opções de anotações" title="Opções de anotações"/>
                        </ItensAnotacoes6>
                    </Anotacoes>
                </Perfil>
            </Container>
            <Footer>
                <p>Copyright © 2021 | TecnoTc Todos os direitos reservados</p>
            </Footer>
        </>
    );
}

export default PerfilProf;