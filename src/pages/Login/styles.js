import styled, { keyframes } from 'styled-components';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import px2vw from '../../utils/px2vw';
// Animação da abertura da aplicação]
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

export const Overlay = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  overflow: hidden;

  display: flex; 
  justify-content: center;
  align-items: center;

  background-color: var(--primaryPurple);
`;

export const Container = styled.div`
  animation: ${loginAnimation} 0.5s;

  width: 1100px;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    width: 900px;
  }
`;

export const Logo = styled.div`
    width: 150px;
    height: 60px;
    
    text-align: center;

    margin-bottom: 45px;

    > img {
      width: 150px;
      height: 60px;
    }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    margin-top: -10px;
    margin-left: -30px;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    margin-top: -10px;
    margin-left: -35px;
  }
`;

export const LoginEnter = styled.div`
  width: 50%;
  height: 625px;

  padding: 58px;
  padding-top: 30px;

  background-color: white;
  border: solid 2px var(--primaryPurple);

  flex-direction: column;

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;


export const ConfirmLogin = styled.div`
  width: 600px;
  height: 300px;
`;

export const ApresentacaoEmpresa = styled.div`
  width: 70%;
  height: 30px;

  text-align: center;
  font-weight: bold;

  color: var(--primaryPurple);
  font-size: 25px;

<<<<<<< HEAD
  @media (max-width: 1024px) {
    width: 60%;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 45%;
    flex-wrap: wrap;
  }

  @media (max-width: 360px) {
    flex-wrap: nowrap;
  }
`;

export const BoasVindas = styled.div`
  width: 70%;
  min-height: 5px;

  text-align: center;
  font-size: 14px;
  font-weight: bold;

  color: var(--grey);

  margin-bottom: 20px;

  @media (max-width: 1024px) {
    width: 60%;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    width: 45%;
    flex-wrap: nowrap;
  }

  @media (max-width: 360px) {
    flex-wrap: nowrap;
  }
`;

export const InputsLogin = styled.form`
  max-width: 80%;
  min-height: 45px;
  height: auto;
  overflow: hidden;
  position: relative;

  margin-top: 28px;

  padding: 5px;

  // background-color: red;

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

    border: solid 1px var(--primaryPurple);
  }

  @media (max-width: 1280px) {
    flex-wrap: nowrap;
    width: ${px2vw(550)};
    min-height: ${px2vw(300)};
    height: 100%;
    margin-left: -22px;
  }

  @media (max-width: 1200px) {
    flex-wrap: nowrap;
    width: ${px2vw(565)};
    min-height: ${px2vw(300)};
    height: 100%;
    margin-left: -22px;
  }

  @media (max-width: 1100px) {
    flex-wrap: nowrap;
    width: ${px2vw(640)};
    min-height: ${px2vw(300)};
    height: 100%;
    margin-left: -22px;
  }

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    width: ${px2vw(600)};
    min-height: ${px2vw(300)};
    height: 100%;
    margin-left: -15px;
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: ${px2vw(500)};
    min-height: ${px2vw(100)};
    height: 100%;
  }

  @media (min-width: 360px) {
    flex-wrap: nowrap;
    width: ${px2vw(600)};
    margin-left: -30px;
  }
`;

export const IconEmail = styled(FaEnvelope)`
  position: absolute;
  left: 4px;

  font-size: 15px;

  margin-top: -35px;
  margin-left: 3px;

  color: var(--primaryPurple);

  cursor: pointer;
`;

export const IconLock = styled(FaLock)`
  position: absolute;
  left: 4px;

  font-size: 15px;

  margin-top: -35px;
  margin-left: 3px;

  color: var(--primaryPurple);

  cursor: pointer;
`;

export const RedefinirSenha = styled.div`
  min-width: 50px;
  font-size: 12px;
  font-weight: bold;

  margin-top: -10px;

  > a {
    color: black;

    :hover{
      cursor: pointer;
      pointer-events: auto; 
    }
  }
`;

export const InputLogar = styled.button`
  width: 100%;
  height: 36px;

  margin-top: 50px;

  background-color: var(--primaryPurple);

  border-radius: 10px 10px 10px 10px;
  border: solid 1px var(--primaryPurple);

  text-align: center;

  padding: 7px;

  > p {
    color: white;
    font-size: 17px;
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
  
  align-self: unsafe-center;

  > p {
    cursor: not-allowed;
  }

  > span {
    :hover {
      cursor: pointer;
    }
  }
`;

export const GifImages = styled.div`
  width: 50%;
  height: 100vh;

  // background-color: red;

  // align-items: center;
  // justify-content: center
  // display: inline-block;
  // width: 1100px;
  min-height: 500px;
  height: auto;
  overflow: hidden;
`;

export const GifImageLogin = styled.div`
  width: 200px;
  height: 200px;

  margin-top: 110px;
  margin-right: 250px;

  float: right;

  > img {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 1280px) {
    margin-right: 275px;
    margin-top: 120px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    margin-right: 185px;
    margin-top: 120px;
    flex-wrap: nowrap;

    > img {
    width: 345px;
    height: 345px;
  }
  }
`;

export const GifColorLogin = styled.div`
  width: 850px;
  height: 650px;

  margin-top: -350px;
  margin-right: -300px;

  float: right;

  > img {
    width: 860px;
    height: 700px;
  }
`;