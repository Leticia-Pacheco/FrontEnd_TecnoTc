import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background-color: #333C;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.form`
    width: 700px;
    min-height: 300px;
    height: auto;
    overflow: hidden;
    max-height: calc(100vh - 20px); /*Para calcular uma boa altura e que não fique tão grande nem tão pequeno*/

    z-index: 19;
    overflow-y: auto;
    position: absolute;
    flex-direction: column;
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 25px;
    color: var(--primaryPurple);

    box-shadow: 2px 2px 10px black;
    background-color: white;
    >header{
        display: flex;
        margin-bottom: 40px;

        img{
            height: 60px;
        }
    }
    > h2 {
        color: var(--primaryPurple);
        align-self: flex-start;
    }

    > h3 {
        font-size: 18px;
        color: var(--primaryPurple);

        margin-bottom: 5px;

        align-self: flex-start;
    }
    >span{
        margin-left: 600px;
        color: black;
        cursor: pointer;
        :hover {
            color: red;  
        }
    }
    > input {
        width: 100%;
        height: 35px;

        border-radius: 4px;
        margin-bottom: 50px;

        background-color: var(--greyQuaternary);
        border: solid 2px var(--greyQuaternary);

        font-size: 16px;
        padding: 5px;

        align-self: flex-start;
    }

    #btn{
        display: flex;
        align-items: center;
        justify-content: center;
        > button {
        width: 280px;
        height: 35px;
        
        border: solid 2px var(--primaryGreenWater);
        border-radius: 4px;
        
        font-size: 18px;
        color: white;
        font-weight: bold;
        
        margin-top: 20px;

        
        background-color: var(--primaryGreenWater);

        :hover {
            cursor: pointer;
        }
    }
    }
    > #date {
    width: 800px;
    height: 50px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    border: none;
    h3 {
    font-size: 0.8rem;

    color: #787878;
  }
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
`;