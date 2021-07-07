import styled from 'styled-components';
import colors from '../../styles/colors';

export const MenuLateral = styled.div`
  width: 6%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  background-color: ${colors.primaryPurple};
//   position: fixed;
`;

export const MenuPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px;
    margin-bottom: 80px;

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

export const MenuFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
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
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
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
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
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

export const MenuLogout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin-top: 400px;

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
