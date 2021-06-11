import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    > input {
      border: 0;
      padding-left: 35px;
      padding-right: 10px;
      border-radius: 25px;
  
      font-family: sans-serif;
      width: 400px;
      height: 40px;
  
      font-size: 16px;
  
      transition: width 0.4s ease-in-out;
    }
  
    > input:focus {
      width: 500px;
    }
  
    > input:focus + svg {
      color: var(--darkGray);
    }
`;

export const IconSearch = styled(FaSearch)`
    position: absolute;
    left: 10px;

    font-size: 20px;

    color: var(--lightGray);

    cursor: pointer;
`;