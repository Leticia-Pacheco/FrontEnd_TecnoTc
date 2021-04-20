import styled, { keyframes } from 'styled-components';
import { FaLock, FaEnvelope } from 'react-icons/fa';

// Animação da abertura da aplicação
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

  max-width: 887px;
  height: 570px;
  max-height: 100vh;

  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  background-color: var(--primaryPurple);

  border-radius: 0px 30px 30px 0px;

  // display: flex;
`;

export const LoginEnter = styled.div`
  width: 32%;
  height: 570px;

  padding: 58px;

  position: fixed;

  background-color: white;
  border: solid 2px var(--primaryPurple);

  border-radius: 0px 500px 500px 0px;

  flex-direction: column;
`;

export const Logo = styled.div`
  width: 115px;
  height: 40px;

  padding-top: 11px;
  text-align: center;

  margin-bottom: 45px;

  background-color: var(--primaryGreenWater);

  > p {
    color: white;
    font-size: 14px;
  }
`;

export const ConfirmLogin = styled.div`
  width: 260px;
  height: 300px;
`;

export const ApresentacaoEmpresa = styled.div`
  width: 100%;
  height: 30px;

  text-align: center;
  font-weight: bold;

  color: var(--primaryPurple);
  font-size: 25px;
`;

export const BoasVindas = styled.div`
  width: 100%;
  min-height: 5px;

  text-align: center;

  font-size: 14px;
  font-weight: bold;

  color: var(--grey);

  margin-bottom: 20px;
`;

export const InputsLogin = styled.form`
  width: 100%;
  min-height: 45px;
  height: auto;
  overflow: hidden;
  position: relative;

  margin-top: 28px;

  > p {
    margin-top: 10px;
    margin-bottom: 5px;

    color: var(--primaryPurple);

    font-size: 14px;
  }

  > input {
    width: 100%;
    height: 36px;

    font-size: 15px;

    padding-left: 25px;

    border: solid 1px var(--primaryPurple);
  }
`;

export const IconEmail = styled(FaEnvelope)`
  position: absolute;
  left: 3px;

  font-size: 15px;

  margin-top: 10px;
  margin-left: 3px;

  color: var(--primaryPurple);

  cursor: pointer;
`;

export const IconLock = styled(FaLock)`
  position: absolute;
  left: 3px;

  font-size: 15px;

  margin-top: 10px;
  margin-left: 3px;

  color: var(--primaryPurple);

  cursor: pointer;
`;

export const RedefinirSenha = styled.div`
  min-width: 50px;

  font-size: 12px;
  font-weight: bold;

  float: right;
`;

export const InputLogar = styled.button`
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

export const TextCadastro = styled.div`
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

export const GifImageLogin = styled.div`
  width: 300px;
  height: 300px;

  margin-top: 110px;
  margin-right: 100px;

  float: right;

  > img {
    width: 350px;
    height: 350px;
  }
`;

export const GifColorLogin = styled.div`
  width: 600px;
  height: 620px;

  margin-top: -25px;
  margin-right: -370px;

  // background-color: RGB(255, 255, 255, 0.5);

  float: right;

  > img {
    width: 630px;
    height: 620px;
  }
`;
