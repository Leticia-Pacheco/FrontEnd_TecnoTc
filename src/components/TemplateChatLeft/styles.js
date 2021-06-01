import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    min-height: 25px;
    height: auto;
    overflow: hidden;
    width: 400px;
    background-color: ${colors.primaryPurple};
    border-radius: 10px 10px 0px 10px;
    padding: 10px;
    margin-top: 20px;
    margin-left: auto;

    > p {
        color: white;
    }

`;