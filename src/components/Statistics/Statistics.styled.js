import styled from 'styled-components';
export const StatisticsSection = styled.section`
  width: 300px;
  margin: 0 auto 50px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`;
export const StatisticsHeading = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
export const StatisticsItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  span:first-child {
    margin-bottom: 10px;
  }
  span:last-child {
    font-size: 20px;
    font-weight: bold;
  }
`;
