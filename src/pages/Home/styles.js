import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    align-content: center;
    /* align-items: center; */
    /* justify-content: center; */
    /* display: flex; */
    // overflow-x: hidden;
`;

export const Conteudo = styled.div`
    width: 100%;
    min-height: 200px;
    height: auto;
    overflow: hidden;
`;

export const Header = styled.header`
    width: 100%;
    height: 550px;
    
    display: flex;
    justify-content: center;

    background-color: var(--primaryPurple);

    > img {
        margin-top: 85px;
        margin-left: 150px;
    }
`;

export const MenuContainer = styled.header`
    width: 100%;
    height: 85px;

    padding-top: 20px;
    padding-left: 60px;
    padding-right: 70px;

    position: fixed;
    box-shadow: 0px 1px 10px black;
    display: flex;
    flex-direction: row;
    // align-items: center;
    justify-content: center;

    background-color: var(--primaryPurple);

    > ul {
        margin-left: 350px;
        margin-top: 10px;
    }
    > ul li {
        margin-left: 20px;
        float: right;

        font-size: 18px;
        font-weight: bold;
        color: white;
        border-bottom: solid 3px white;

        :hover {
            cursor: pointer;
        }
    }
`;

export const Logo = styled.div`
    width: 150px;
    height: 60px;

    > img {
        width: 150px;
        height: 60px;
    }
`;

export const TextoHeader = styled.div`
    width: 50%;
    min-height: 200px;
    height: auto;
    overflow: hidden;

    margin-top: 85px;
    padding-top: 120px;
    padding-left: 70px;
    padding-right: 70px;

    display: flex;
    flex-direction: column;

    > h1 {
        font-size: 35px;
        color: white;
    }

    > p {
        color: white;
        font-size: 18px;

        margin-bottom: 15px;
    }

    > button {
        width: 140px;
        height: 30px;

        margin-bottom: 5px;

        color: white;
        font-weight: bold;
        font-size: 15px;

        border-radius: 4px;
        border: none;
        background-color: var(--primaryGreenWater);

        :hover {
            cursor: pointer;
        }
    }

    > span {
        color: white;

        :hover {
            cursor: pointer;
        }
    }
`;

export const SobreNos = styled.section`
    width: 100%;
    height: 600px;

    display: flex;
    // align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 70px;
    padding-right: 70px;

    > h1 {
        text-align: center;
        font-size: 30px;

        color: var(--primaryPurple);
    }
`;

export const Informacoes = styled.div`
    width: 100%;
    min-height: 100px;
    height: auto;
    overflow: hidden;

    // background-color: green;
    word-break: break-word;

    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    > img {
        width: 400px;
        height: 400px;
    }

    > p {
        width: 700px;
        text-align: justify;
        font-size: 35px;
        font-family: Roboto;

        margin-left: 80px;
    }
`;

export const Oferecemos = styled.section`
    width: 100%;
    height: 800px;

    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 70px;
    padding-right: 70px;

    aling-items: center;
    justify-content: center;
    // display: flex;
    word-break: break-all;

    background-color: var(--greyQuaternary);

    > h1 {
        font-size: 30px;
        color: var(--primaryPurple);
    }
`;

export const OferecItem = styled.div`
    width: 200px;
    height: 200px;

    margin-left: 80px;
    margin-right: 80px;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-shadow: 2px 5px 10px black;
    border-radius: 30px 0px 30px 0px;
    
    background-color: white;

    > img {
        width: 120px;
        height: 90px;

        background-color: green;
    }

    > p {
        margin-top: 20px;
        text-align: center;

        color: var(--grey);
    }
`;

export const NossoApp = styled.section`
    width: 100%;
    height: 500px;

    border-bottom: solid 6px var(--primaryPurple);
    box-shadow: 2px 2px 10px var(--primaryPurple);
`;

export const Equipe = styled.section`
    width: 100%;
    height: 500px;
`;







export const Footer = styled.footer`
    width: 100%;
    height: 120px;

    background-color: var(--primaryPurple);
`;