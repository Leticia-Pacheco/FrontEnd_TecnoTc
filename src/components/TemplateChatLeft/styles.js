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
    font-size: 1rem;
  }
  > h3 {
    font-size: 0.7rem;
    color: ${colors.primaryGreenWater};
  }
  > span {
    margin-left: 300px;
    font-size: 0.6rem;
    color: ${colors.primaryGreenWater};
  }
`;
