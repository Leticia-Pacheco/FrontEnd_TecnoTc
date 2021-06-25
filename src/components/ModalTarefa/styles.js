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
  width: 900px;
  min-height: 300px;
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

  /* align-items: center; */
  color: var(--primaryPurple);

  box-shadow: 2px 2px 10px black;
  background-color: white;
  > span {
    margin-left: 800px;
    color: black;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  h3 {
    font-size: 0.8rem;

    color: #787878;
  }

  > p {
    margin-bottom: 20px;
    font-size: 0.8rem;
    color: #000;
  }
  > header {
    display: flex;
    align-items: center;
  }
  > #imageUser {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-bottom: 30px;
  }
  > section {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    > #selecetBucket {
      width: 200px;
    }
    > #selecetProgresso {
      width: 200px;
    }
    > #selecetPrioridades {
      width: 200px;
    }
    .appearance-select {
      background-color: #f1f1f1;
      width: 150px;
      height: 30px;
      border: none;
    }
  }
  > #addUser {
    display: flex;
  }

  > #date {
    width: 800px;
    display: flex;
    align-items: center;
    height: 150px;
    border: none;
    > #dateStart {
      > input {
        width: 250px;
        height: 40px;
        background-color: #f1f1f1;
        border: none;
      }
    }
    > #dateEnd {
      padding-left: 50px;
      > input {
        width: 250px;
        height: 40px;
        background-color: #f1f1f1;
        border: none;
      }
    }
  }
  #createTask {
    height: auto;
    > h3 {
      cursor: pointer;
      :hover {
        color: var(--primaryGreenWater);
      }
    }
  }
  #cheklistCard {
    display: flex;
    flex-direction: column;
    > div {
      width: 90%;
      height: 40px;
      display: flex;
      align-items: center;
      color: black;
      font-size: 1rem;
      :hover {
        background-color: #f1f1f1;
      }
      > input [type='checkbox'] {
        color: black;
      }
      > label {
        margin-left: 10px;
      }
    }
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
  }

  #dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
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
