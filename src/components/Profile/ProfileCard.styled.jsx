import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  margin: 20px auto 0;
  border-radius: 5px;
  border: 1px solid #317b1d;
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ImgAvatar = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  border-radius: 50%;
  border: 1px solid #317b1d;
`;
export const Name = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
`;
export const Tag = styled.p`
  margin: 0;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
`;
export const StatsContainer = styled.ul`
  display: flex;
  list-style: none;
  background-color: #ffd600;
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  padding-left: 0;
  border-top: 1px solid #142d4c;
  margin: 0;
`;
export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const Label = styled.span`
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: 500;
`;
