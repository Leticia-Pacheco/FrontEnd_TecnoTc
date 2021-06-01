import styled from 'styled-components';
import colors from '../../styles/colors';
import ImageQuadro from '../../assets/ImagesGrupos/tech.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const MenuLateral = styled.div`
  width: 6%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  padding-top: 40px;

  background-color: ${colors.primaryPurple};
`;

export const MenuFeed = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    :hover {
      cursor: pointer;
      background-color: #332965;
    }

    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
    }
    > img {
        width: 35px;
        height: 35px;
    }
`;

export const MenuTarefas = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    :hover {
      cursor: pointer;
      background-color: #332965;
    }
    
    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
    }
    > img {
        width: 35px;
        height: 35px;
    }
`;

export const MenuReunioes = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    :hover {
      cursor: pointer;
      background-color: #332965;
    }
    
    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
    }
    > img {
        width: 35px;
        height: 35px;
    }
`;

export const MenuChats = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
    padding: 5px;

    :hover {
      cursor: pointer;
      background-color: #332965;
    }
    
    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
    }
    > img {
        width: 35px;
        height: 35px;
    }
`;

export const MenuLogout = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    :hover {
      cursor: pointer;
      background-color: #332965;
    }
    
    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
        }

    > img {
        width: 35px;
        height: 35px;
        margin-left: 7px;
        }
`;

export const Submenu = styled.div`
    width: 22%;
    min-height: 100vh;
    background-color: #332965;
    box-shadow: -1px 0px 15px black;
    display:flex;
    flex-direction: column;
    align-items: center;
    >h3 {
        color:white;
        margin-top: 10px;
        margin-bottom: 50px;
        :hover {
        color: var(--primaryGreenWater);
        cursor: pointer;
    }
    }
`;


export const ComponetSubMenu = styled.div`
    width: 100%;
    min-height: 5%;
    background-color: transparent;
    border-bottom: 1px solid #584C95;
    color: #fff;
    padding: 6px;
    display: flex;
    align-items: center;
    margin-bottom:10px;
    font-size:1.3rem;
    :hover{
        cursor: pointer;
        background-color: #fff;
        color: #000;
    }
`;

export const FotoContato = styled.div`
    width: 52px;
    height: 52px;
    border: 1px solid white;
    border-radius: 25px;

    > img {
        width: 50px;
        height: 50px;
        border-radius: 25px;    
    }
`;

export const InfoContato = styled.div`
    width: 100%;
    min-height: 10%;
    margin-left: 10px;
    padding-top: 8px;
`;

export const ComponetQuadros = styled.div`
    width: 72%;
    min-height: 100vh;
    background-color: #ffffff;
    box-shadow: -1px 0px 15px black;
    z-index: 1;
`;

export const TituloQuadros = styled.div`
    width: 100%;
    min-height: 8%;
    background-color: ${colors.primaryPurple};
    padding: 12px;
    > h1 {
        color: white;
        font-size: 20px;
    }
`;

export const ContainerQuadros = styled.div`
    width: auto;
    height: 90%;
    padding: 15px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    overflow-x: hidden; 
    overflow-y: scroll; 
    white-space: nowrap; 
`;
export const Quadros = styled.div`
    width: 450px;
    height: 200px;
    grid-column-start: auto;
    background-image: url(${ImageQuadro});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
   >h2{
       padding-left: 20px;
       font-size:2rem;
       color: white;
   }
`;
export const CriarQuadros = styled.div`
    width: 450px;
    height: 200px;
    background-color:#d1d1d1;
    border-radius: 10px;
    padding-left: 20px;
    font-size:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color:#b3b3b3;
    }
`;


export const UltimaMensagem = styled.div`

    > p {
        color: white;
        font-size: 12px;
    }
`;

export const Mensagens = styled.div`
    width: 72%;
    min-height: 100vh;
    box-shadow: -1px 0px 15px black;
    z-index: 1;
`;

export const ContatoMensagem = styled.div`
    width: 100%;
    min-height: 8%;
    background-color: ${colors.primaryPurple};
    padding: 12px;

    > h1 {
        color: white;
        font-size: 20px;
    }
`;

export const ContainerMensagens = styled.div`
    width: 100%;
    height: 80%;
    padding: 15px;
    overflow-y: auto;
`;

