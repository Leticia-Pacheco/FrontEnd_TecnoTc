import styled, { keyframes } from 'styled-components';

const loginAnimation = keyframes`
    0%{
        top: -250px;
        opacity: 0;
        transform: scale(0.01) rotate(90deg);
    }
    
    100%{
        top: 0px;
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
`;

export const Container = styled.div`
  animation: ${loginAnimation} 0.5s;
  width: 887px;
  height: 700px;

  padding-top: 20px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  background-color: var(--primaryPurple);

  border-radius: 30px 30px 30px 30px;
`;

export const RegisterUsuary = styled.div`
  width: 370px;
  height: 650px;
  border-radius: 30px 30px 30px 30px;
  margin-left: auto;
  margin-right: auto;

  padding: 35px;

  background-color: white;

  > p {
    font-size: 13px;
    font-weight: bold;

    color: var(--primaryPurple);
  }
`;

export const Logo = styled.div`
  width: 115px;
  height: 40px;

  padding-top: 11px;
  text-align: center;

  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  background-color: var(--primaryGreenWater);

  > p {
    color: white;
    font-size: 14px;
  }
`;

export const ApresentacaoEmpresa = styled.div`
  width: 100%;

  margin-bottom: 22px;

  text-align: center;

  > span {
    font-size: 25px;
    color: var(--primaryGreenWater);

    font-weight: bold;
  }

  > p {
    font-size: 13px;
  }
`;

export const NivelUsuario = styled.div`
  width: 100%;
  min-height: 100px;
  height: auto;
  overflow: hidden;

  display: flex;

  margin-bottom: 30px;
`;

export const OpcaoNivelUsuario = styled.button`
  width: 80px;
  min-height: 80px;

  background-color: white;
  border: solid 2px white;

  color: var(--primaryPurple);

  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;

  font-size: 14px;
  font-weight: bold;
  text-align: center;

  > p {
    margin-top: 5px;
    font-size: 15px;
  }

  > img {
    width: 80px;
    height: 80px;

    margin: 0px;

    border: solid 2px var(--primaryPurple);
    border-radius: 100px 100px 100px 100px;

    :hover {
      cursor: pointer;

      width: 85px;
      height: 85px;

      transition: 0.2s;
    }
  }
`;

export const InputCadastrar = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 16px;

  background-color: var(--primaryPurple);

  border-radius: 10px 10px 10px 10px;
  border: solid 1px var(--primaryPurple);

  text-align: center;

  padding: 7px;

  > p {
    color: white;

    font-weight: bold;
  }

  :hover {
    cursor: pointer;
  }
`;

export const TextLogin = styled.div`
  width: 100%;

  margin-top: 5px;

  text-align: center;
  font-size: 13px;
  font-weight: bold;
  word-spacing: 1px;

  :hover {
    cursor: pointer;
  }
`;
