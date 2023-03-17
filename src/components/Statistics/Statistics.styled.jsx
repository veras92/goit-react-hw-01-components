import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  padding: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 20px auto 0;
  border-radius: 5px;
  border: 1px solid #317b1d;
`;
export const StatisticsTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 0;
  & > * {
    width: calc(100% / 3);
    padding: 15px 5px;
  }
`;
export const StatWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: white;
`;
export const StatLabel = styled.span`
  font-size: 14px;
`;
export const StatPercentage = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
