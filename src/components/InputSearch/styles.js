import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import colors from "../../styles/colors";

export const Container = styled.div`
    width: 100%;
    height: 8%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primaryPurple};
    > input {
      border: 0;
      padding-left: 35px;
      padding-right: 10px;
      border-radius: 20px;
  
      font-family: sans-serif;
      width: 90%;
      height: 35px;
  
      font-size: 16px;
  
      transition: width 0.4s ease-in-out;
    }
`;

export const IconSearch = styled(FaSearch)`
    position: absolute;
    left: 24px;
    font-size: 20px;
    color: var(--grey);
    cursor: pointer;
`;