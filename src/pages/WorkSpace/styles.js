import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  > header {
    width: 100%;
    height: 75px;
    padding: 50px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primaryPurple);

    #home{
      width: 60px;
      height: 60px;
      border-radius: 10px;

      background-color: #dcddd7;
    }
    #logo{
      width: 300px;
      height: 90px;
      image-rendering: pixelated;
    }
    .profileUser{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  > #sub-menu {
    width: 100%;
    height: 65px;
    background-color: #8b85a7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >h3{
      margin-left: 10px;
      font-size: 1.2rem;
      color: #fff;
    }
    >article{
      display: flex;
      align-items: center;
      justify-content:center;
      .profileUser{
      width: 60px;
      height: 60px;
      margin-left: 5px;
      border-radius: 50%;
    }
    div{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 30px;
      width: 150px;
      height: 45px;
      border-radius: 10px;
      background-color:#dcddd7;
      :hover {
        cursor: pointer;
        background-color:#a2a6a3;
      }
    }
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >section{
    width:100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    >div{
      position: relative;
      display: flex;
      align-items: center;
      margin: 50px 10px;
      padding-left: 20px;
      width: 300px;
      height: 50px;
      border-radius: 10px;
      background-color:#dcddd7;
      :hover {
        cursor: pointer;
        background-color:#a2a6a3;
      }
    }>h3{
      margin: 0px 10px;
      position: absolute;
    }
  }
`;
