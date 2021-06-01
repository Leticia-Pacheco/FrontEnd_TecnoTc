import styled from 'styled-components';
import colors from '../../styles/colors';

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

export const ListContatos = styled.div`
    width: 22%;
    min-height: 100vh;
    background-color: #332965;
    box-shadow: -1px 0px 15px black;
`;



export const Contato = styled.div`
    width: 100%;
    min-height: 10%;
    background-color: #332965;
    border-bottom: 1px solid #584C95;
    padding: 6px;
    display: flex;

    :hover{
        cursor: pointer;
        background-color: #584C95;
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

export const NomeContato = styled.div`

    > h2 {
        color: white;
        font-size: 16px;
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
    background-color: #ffffff;
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
`;

