import styled from 'styled-components';
import colors from '../../styles/colors';
import { GrConfigure } from 'react-icons/gr';

export const Container = styled.div`
  width: 100%;
  min-height: 850px;
  height: auto;
  overflow: hidden;

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  z-index: -1;
`;

export const ContainerPerfilConteudo = styled.div`
  width: 80vw;
  min-height: 800px;
  height: auto;
  overflow: hidden;

  display: flex;

  border-top: solid 2px var(--primaryPurple);
  border-left: solid 2px var(--primaryPurple);
  border-right: solid 2px var(--primaryPurple);

  align-self: center;
`;

export const PerfilInfoUsuario = styled.div`
  width: 30%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  background-color: ${colors.primaryPurple};
  a {
    color: black;
  }
`;

export const InformacoesUsuario = styled.div`
  width: 100%;
  height: 140px;
  color: white;
  margin-bottom: 50px;

  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;

  display: flex;
`;

export const ImageUsuario = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  > img {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }
`;

export const TextInfos = styled.div`
  width: 100%;
  height: 35px;

  margin-top: 30px;
  margin-left: 8px;

  > span {
    font-weight: bold;

    color: white;
    font-size: 18px;
  }
`;

export const MenuLateral = styled.div`
  width: 100%;
  min-height: 200px;
  height: auto;
  overflow: hidden;

  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;

  margin-bottom: 400px;
  display: flex;
  flex-direction: column;
  > ul > li {
    display: flex;
    margin-bottom: 40px;

    :hover {
      cursor: pointer;
    }

    > p {
      margin-top: 20px;

      text-align: left;
      color: white;

      font-weight: bold;
    }

    > img {
      width: 50px;
      height: 50px;

      margin-right: 10px;
    }
  }
`;

export const EditarPerfil = styled.div`
  width: 100%¨;
  height: 25px;
  text-align: center;
  justify-content: center;
  color: white;
  display: flex;

  > img {
    width: 20px;
    height: 20px;

    margin-right: 5px;
  }

  > p {
    cursor: pointer;
    font-family: 'Roboto';
    line-height: 22px;
    font-size: 17px;
  }
`;
export const ConfigIcon = styled(GrConfigure)`
  color: #fff;
`;

export const Conteudo = styled.div`
  width: 70%;
  height: inherit;

  padding-top: 45px;

  > h3 {
    margin-bottom: 20px;
    margin-left: 42px;

    color: var(--primaryPurple);
  }
  > #btn-anotation {
    :hover {
      cursor: pointer;
      color: var(--primaryGreenWater);
    }
  }
  > #btn-grup {
    :hover {
      cursor: pointer;
      color: var(--primaryGreenWater);
    }
  }
`;

export const Grupos = styled.div`
  width: 100%;
  height: 25%;

  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
`;

export const Agrupamento = styled.div`
  width: 92%;
  height: 200px;
  display: flex;
  flex-direction: row;
  padding-right: 5px;
`;

export const AgrupamentoAnotacoes = styled.div`
  width: 92%;
  height: 80px;

  padding-right: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* // display:table-cell; */
`;

export const ComponentGrupo = styled.div`
  width: 200px;
  height: 200px;

  padding: 5px;
  margin-left: 20px;

  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;

  box-shadow: 2px 2px 2px black;
  border: 1px solid black;

  text-align: center;

  > p {
    color: var(--primaryPurple);
    font-weight: bold;
  }
  #dropbtn {
    color: var(--primaryPurple);
    font-size: 1.2rem;
    margin-left: 10px;
    border: none;
    cursor: pointer;
  }

  #dropdown {
    position: relative;
    display: inline-block;
    > img {
      width: 20px;
      height: 20px;

      margin-left: 170px;
    }
  }

  #dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    right: 0;
    min-width: 60px;
    height: 40px;
    z-index: 1;
    svg {
      min-width: 60px;
      height: 40px;
      :hover {
        background-color: #b3b3b3;
        border-radius: 10px;
      }
    }
  }

  #dropdown-content span {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  #dropdown-content span:hover {
    background-color: #f1f1f1;
  }

  #dropdown:hover #dropdown-content {
    display: block;
  }

  #dropdown:hover #dropbtn {
    color: var(--primaryGreenWater);
  }
`;

export const ImageGrupo = styled.img`
  width: 80px;
  height: 80px;

  margin-top: 15px;

  border-radius: 15px 15px 15px 15px;

  background-color: var(--primaryGreen);

  line-height: 80px;
  margin-bottom: 20px;

  > p {
    font-weight: bold;
    color: white;
  }
`;

export const ButtonAvancarGrupos = styled.div`
  width: 4%;
  height: 200px;

  align-items: center;
  justify-content: end;
  display: flex;

  :hover {
    background-color: var(--greyQuaternary);
    transition: 0.4s;
    cursor: pointer;
  }

  > img {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonAvancarAnotacoes = styled.div`
  width: 4%;
  height: 80px;

  align-items: center;
  justify-content: center;
  display: flex;

  line-height: 10px;

  :hover {
    background-color: var(--greyQuaternary);
    transition: 0.4s;
    cursor: pointer;
  }

  > img {
    width: 20px;
    height: 20px;
  }
`;

export const Anotacoes = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
`;

export const ComponentAnotacoes = styled.div`
  width: 200px;
  height: 50px;

  margin-left: 5px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-left: 5px;

  background-color: #dd4a88;

  > p {
    font-weight: bold;
    color: white;
    text-align: center;
    font-size: 18px;
  }

  > img {
    width: 17px;
    height: 17px;

    margin-right: -100px;

    margin-left: 90px;
  }
  #dropbtn {
    color: var(--primaryPurple);
    font-size: 1.2rem;
    margin-left: 10px;
    border: none;
    cursor: pointer;
  }

  #dropdown {
    margin-left: 20px;
    position: relative;
    display: inline-block;
    > img {
      width: 20px;
      height: 20px;
    }
  }

  #dropdown-content {
    width: 120px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    right: 0;
    min-width: 60px;
    height: 40px;
    z-index: 1;
    svg {
      min-width: 60px;
      height: 40px;
      :hover {
        background-color: #b3b3b3;
        border-radius: 10px;
      }
    }
  }

  #dropdown-content span {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  #dropdown-content span:hover {
    background-color: #f1f1f1;
  }

  #dropdown:hover #dropdown-content {
    display: block;
  }

  #dropdown:hover #dropbtn {
    color: var(--primaryGreenWater);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primaryPurple);

  > p {
    width: 250px;

    text-align: center;
    font-weight: bold;

    color: white;

    font-size: 16px;
  }
`;
