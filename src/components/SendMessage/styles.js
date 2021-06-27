import styled from "styled-components";
import {FaPaperPlane} from "react-icons/fa";
import colors from "../../styles/colors";

export const ContainerInputMessage = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > input {
      border: 0;
      padding-left: 15px;
      padding-right: 10px;
      border-radius: 20px;
  
      font-family: sans-serif;
      width: 70%;
      height: 40px;
  
      font-size: 16px;
      color: white;

      background-color: ${colors.primaryPurple};

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
`;

export const Send = styled.button`
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primaryGreenWater};
    border-radius: 20px;
    margin-left: 20px;

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