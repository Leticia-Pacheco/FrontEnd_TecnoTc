import { Container, Content, Titulo, LogoTecnoTc, SelectSprints, ContainerSprints, SprintBacklog, SprintRevew, SprintDaily } from "./styles";
import ImageLogo from '../../assets/logos/logo_fundo_roxo_png.png';

function Sprints() {
    return(
        <Container>
            <Content>
                <Titulo> 
                    <LogoTecnoTc>
                        <img src={ImageLogo} alt="Logo" title="Logo" />
                    </LogoTecnoTc>
                    <h1>Sprints</h1>
                </Titulo>
                <SelectSprints>
                <select id="categories" label="categorias">
                    <option value="">Selecione</option>
                    <option>1º Sprint</option>
                    <option>2º Sprint</option>
                    <option>3º Sprint</option>
                </select>
                </SelectSprints>
                <ContainerSprints>
                    <SprintBacklog> Sprint Backlog </SprintBacklog>
                    <SprintRevew> Sprint Revew </SprintRevew>
                    <SprintDaily> Sprint Daily </SprintDaily>
                </ContainerSprints>
                
            </Content>
        </Container>
    );
};

export default Sprints;