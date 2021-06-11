import styled from 'styled-components';
import colors from '../../styles/colors';
import { FaPaperPlane } from "react-icons/fa";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    
`;  

export const ContainerPosts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    gap: 10px;
    overflow-y: auto; 
    padding-top: 100px;
    margin-bottom: 2px;
`;

export const BarraPesquisa = styled.div`
    position: fixed;
    width: 95%;
    height: 80px;
    background-color: var(--primaryPurple);
    display: flex;
    align-items: center;
    box-shadow: -1px 0px 15px black;
    z-index: 1;
    margin-left: 77px;
`;

export const LogoTecnoTc = styled.div`
    width: 200px;
    height: 80px;
    margin-right: 200px;

    > img {
        width: 180px;
        height: 70px;
    }
`;

export const NovaPergunta = styled.div`
    height: 40px;
    width: 330px;
    border-radius: 8px;
    margin-right: 80px;
    background-color: #332965;
    display: flex;
    box-shadow: 0px 4px 10px black;
    padding-left: 20px;

    :hover{
        cursor: pointer;
    }

    :active{
        background-color: #271f4d;
        margin-top: 5px;
    }
`;

export const TextoNovaPergunta = styled.div`
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
`;

export const QuestionCard = styled.article`
    width: 45%;
    padding: 10px;
    background-color: #e9e9e9;
    border-radius: 4px;

    > header {
        display: flex;
        align-items: center;
        gap: 10px;

        > img {
            width: 30px;
            height: 30px;
            border-radius: 15px;
        }
    }

    > section {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        > strong {
            font-size: 18px;
        }

        > p {
            font-size: 15px;
            padding: 10px 5px;
            border-left: 2px solid var(--primaryPurple);
        }

        > img {
            max-width: 100%;
            align-self: center;
        }
    }

    > footer {
        margin-top: 10px;

        > h1 {
            font-size: 15px;
            cursor: pointer;
            transition: 0.2s;

            :hover {
                color: var(--primaryPurple);
            }
        }

        > section {
            margin-top: 10px;
            border-radius: 4px;
            padding: 5px;
            background-color: #ffffff;

            > header {
                display: flex;
                align-items: center;
                gap: 10px;

                > img {
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                }
            }
            > p {
                    width: 100%;
                    margin-top: 5px;
                    padding: 10px 5px;
                    border-left: 2px solid var(--primaryPurple);
                }
        }

        > form {
            width: 100%;
            margin-top: 5px;
            display: flex;
            gap: 5px;

            > textarea {
                width: 95%;
                height: 40px;
                overflow-y: hidden;
                outline: none;
                resize: none;
                border: none;
                background-color: #332965;
                border-radius: 25px;
                color: white;
                font-size: 16px;
                padding: 11px;
                
                ::-webkit-input-placeholder {
                    color: white;
                }
 
                :-moz-placeholder { /* Firefox 18- */
                    color: white;  
                }
            
                ::-moz-placeholder {  /* Firefox 19+ */
                    color: white;  
                }
                
                :-ms-input-placeholder {  
                    color: white;  
                }
            }
        }
    }
`;

export const Send = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primaryGreenWater);
    border-radius: 20px;

    :hover {
      background-color: #3cba8e;
      cursor: pointer;
    }
`;

export const IconSend = styled(FaPaperPlane)`
    position: absolute;
    left: 8px;
    font-size: 20px;
    color: white;

`;

export const FormNewQuestion = styled.form`
    min-width: 300px;
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
        display: flex;
        flex-wrap: wrap;
    }

    > img {
        align-self: center;
        max-width: 40%;
        display: none;
    }

    > button {
        height: 30px;
        border: none;
        border-radius: 3px;
        font-size: 16px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        background-color: var(--primaryGreenWater);

        :hover {
            background-color: #3cba8e;
            cursor: pointer;
        }

        :active {
            background-color: #329673;
            margin-top: 3px;
        }
    }
`;