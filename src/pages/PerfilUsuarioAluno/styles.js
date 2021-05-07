import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 850px;
  height: auto;
  overflow: hidden;

  align-items: center;
  justify-content: center;
  display: flex;

  z-index: -1;
`;

export const ContainerPerfilConteudo = styled.div`
  width: 1300px;
  min-height: 800px;
  height: auto;
  overflow: hidden;

  display: flex;

  border: solid 2px var(--primaryPurple);
  background-color: #f1f0f0;

  align-self: center;
`;

export const PerfilInfoUsuario = styled.div`
  width: 30%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const InformacoesUsuario = styled.div`
  width: 100%;
  height: 140px;

  margin-bottom: 90px;

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

    color: black;
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

  margin-bottom: 200px;

  display: flex;
  flex-direction: column;

  > ul > li {
    display: flex;
    margin-bottom: 30px;

    > p {
      margin-top: 17px;

      text-align: left;
      color: var(--primaryPurple);
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

  display: flex;

  > img {
    width: 20px;
    height: 20px;

    margin-right: 5px;
  }

  > p {
    font-weight: bold;
    line-height: 22px;
    font-size: 15px;
  }
`;

export const Conteudo = styled.div`
  width: 70%;
  height: inherit;

  padding-top: 45px;

  background-color: orange;
`;

export const Grupos = styled.div`
  width: 100%;
  height: 35%;

  /* padding-left: 30px; */

  background-color: green;

  > h3 {
    margin-bottom: 20px;
    margin-left: 30px;

    color: var(--primaryPurple);
  }
`;

export const ComponentGrupo = styled.div`
    width: 200px;
    height: 240px;

    background-color: red;

    margin-left: 30px;
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
