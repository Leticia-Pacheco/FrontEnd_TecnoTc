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
    >button{
      margin: 0px 20px;
      width: 140px;
      height: 50px;
      border-radius: 10px;
      background-color:#dcddd7;
    }
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  background-color: black;
`;
