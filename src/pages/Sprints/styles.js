import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    min-height: 700px;
    height: auto;
    overflow: hidden;
    width: 1200px;
    border: 2px solid #1f1456;
`;

export const LogoTecnoTc = styled.div`
  width: 200px;
  height: 80px;
  margin-right: auto;

  > img {
    width: 180px;
    height: 70px;
  }
`;

export const Titulo = styled.div`
    background-color: #1f1456;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
    color: #ffffff;
    font-weight: bold;
    font-size: 38px;
    margin-right: 540px;
    }
`;

export const SelectSprints = styled.div`
    height: 200px;
    width: 300px;
    margin-left: 50px;
    margin-top: 80px;

    > label {
        font-size: 14px;
        margin-bottom: 2px;
    }
    > select {
        width: 100%;
        height: 40px;
        font-size: 18px;
        border: none;
        background-color: #EDEDED;
        cursor: pointer;
    }
`;

export const ContainerSprints = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const SprintBacklog = styled.div`
    height: 300px;
    width: 300px;
    background-color: #A593FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

export const SprintRevew = styled.div`
    height: 300px;
    width: 300px;
    background-color: #95c6c9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

export const SprintDaily = styled.div`
    height: 300px;
    width: 300px;
    background-color: #FFA5E6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;