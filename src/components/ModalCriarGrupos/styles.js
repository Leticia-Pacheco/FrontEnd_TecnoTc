import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;

  background-color: #333c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 800px;
  min-height: 550px;
  height: auto;
  overflow: hidden;
  max-height: calc(
    100vh - 20px
  ); /*Para calcular uma boa altura e que não fique tão grande nem tão pequeno*/

  z-index: 19;
  overflow-y: auto;
  position: absolute;
  flex-direction: column;
  display: flex;

  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 25px;

  align-items: center;

  box-shadow: 2px 2px 10px black;
  background-color: white;

  > h2 {
    margin-bottom: 20px;

    color: var(--primaryPurple);
    align-self: flex-start;
  }

  > p {
    text-align: justify;
    font-size: 18px;

    margin-bottom: 30px;
  }

  > h3 {
    font-size: 18px;
    color: var(--primaryPurple);

    margin-bottom: 5px;

    align-self: flex-start;
  }

  > input {
    width: 100%;
    height: 35px;

    border-radius: 4px;
    margin-bottom: 40px;

    background-color: var(--greyQuaternary);
    border: solid 2px var(--greyQuaternary);

    font-size: 16px;
    padding: 5px;

    align-self: flex-start;
  }
  > span {
    margin-left: 650px;
    color: black;
    cursor: pointer;
    :hover {
      color: red;
    }
  }

  > img {
    align-self: center;
    width: 50%;
    display: none;
  }

  > button {
    width: 280px;
    height: 35px;

    border: solid 2px var(--primaryGreenWater);
    border-radius: 4px;

    font-size: 18px;
    color: white;
    font-weight: bold;

    margin-top: 50px;

    background-color: var(--primaryGreenWater);

    :hover {
      cursor: pointer;
    }
  }
`;
