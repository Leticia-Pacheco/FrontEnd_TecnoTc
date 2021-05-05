import styled from 'styled-components';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export const InputsLogin = styled.div`
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
<<<<<<< HEAD
=======

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
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
  top: 50px;
  margin-top: 600px;
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
