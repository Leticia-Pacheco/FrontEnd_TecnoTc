import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 45px;

  background-image: linear-gradient(to left, black, var(--primaryPurple), black);

  > p {
      color: white;
      font-weight: bold;

      font-size: 18px;
  }
`;

export const InformacoesUsuario = styled.div`
  min-width: 120px;
  max-width: 500px;
  width: auto;
  overflow: hidden;
  min-height: 120px;
  height: auto;

  align-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-top: 120px;

  > img {
    width: 120px;
    height: 120px;

    border-radius: 50%;
    border: solid 4px white;
    box-shadow: 2px 5px 30px black;

    margin-bottom: 5px;
  }

  > p {
      font-size: 20px;
      font-family: 'Roboto';
  }

  > input {
      width: 100px;
      height: 20px;

    margin-top: 5px;

      background-color: var(--primaryPurple);
      color: white;
      font-weight: bold;

      border-radius: 4px 4px 4px 4px;
      border: solid 2px var(--primaryPurple);

      :hover {
          cursor: pointer;
          background-color: #312182;
      }
  }
`;

export const Logo = styled.div`
    width: 150px;
    height: 60px;

    > img {
        width: 150px;
        height: 60px;
    }
`;

export const ContainerConteudo = styled.div`
    width: 100%;
    min-height: 700px;
    height: auto;
    overflow: hidden;

    align-items: center;
    margin-bottom: 50px;

    display: flex;
    z-index: -1;
`;

export const Perfil = styled.div`
    width: 1300px;
    min-height: 500px;
    height: auto;
    overflow: hidden;
    /* background-color: red; */

    margin-top: 150px;
    margin-left: 50px;

    display: grid;
    grid-template-columns: 70% 30%;

    /* display: flex; */
`;

export const Grupos = styled.div`
    border-right: solid 3px var(--primaryPurple);

    > h3 {
        color: var(--primaryPurple);
    }

    display: flex;
`;

export const GruposComponents = styled.div`
    width: 80%;
    min-height: 500px;
    height: auto;
    overflow: hidden;

    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* // display:table-cell; USE PRA FAZER A RESPONSIVIDADE, TONTA! */
    align-self: center;
`;

export const GruposIndividuais = styled.div`
    width: 230px;
    height: 260px;

    padding: 7px;
    margin: 35px;
    display: flex;
    // align-items: center;
    flex-direction: column;

    // background-color: white;

    // background-image: linear-gradient(to top, black, #120456, var(--primaryPurple), #120456, black);
    background-color: white;
    box-shadow: 2px 2px 10px black;

    > p {
        padding: 20px;
        text-align: center;
        font-weight: bold;
    }
`;

export const ConfiguracaoGrupos = styled.div`
    width: 18px;
    height: 18px;

    align-self: right;
    position: relative; 
    right: 10px; 
    left: 200px;

    > img {
        width: 18px;
        height: 18px;
        align-self: right;
    }
`;

export const ImageGrupo = styled.div`
    width: 70px;
    height: 70px;

    margin-top: 30px;
    margin-bottom: 20px;
    align-self: center;
    margin-bottom: 35px;

    border-radius: 10px;
    background-color: var(--primaryGreenWater);

    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        line-height: 70px;
    }
`;
export const ImageGrupo2 = styled.div`
    width: 70px;
    height: 70px;

    margin-top: 30px;
    margin-bottom: 20px;
    align-self: center;
    margin-bottom: 35px;

    border-radius: 10px;
    background-color: #E1A0EC;

    > p {
        text-align: center;
        color: white;
        font-weight: bold;
        line-height: 70px;
    }
`;

export const Anotacoes = styled.div`
    text-align: center;

    padding-left: 50px;
    padding-right: 50px;

    > h3 {
        color: var(--primaryPurple);
        margin-bottom: 47px;
    }
`;

export const ItensAnotacoes = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 35px;

    background-color: #84F44F;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ItensAnotacoes1 = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 35px;

    background-color: #1F1456;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ItensAnotacoes2 = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 35px;

    background-color: #E1A0EC;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ItensAnotacoes3 = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 35px;

    background-color: #4ADDA9;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ItensAnotacoes4 = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 35px;

    background-color: #0085FF;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ItensAnotacoes5 = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 35px;

    background-color: #F6F05C;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ItensAnotacoes6 = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    text-align: center;
    padding-left: 10px;

    background-color: #DD4A88;

    > p {
        align-self: center;
        font-weight: bold;
        color: white;
        // line-height: 50px;
    }

    > img {
        height: 20px;
        width: 20px;
        align-self: center;
        position: relative; 
        right: 0px; 
        left: 90px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    // background-color: var(--primaryPurple);
    background-color: var(--greyTerciary);

    > p {
        width: 250px;

        text-align: center;
        // color: white;
        font-weight: bold;

        font-size: 16px;
    }
`;