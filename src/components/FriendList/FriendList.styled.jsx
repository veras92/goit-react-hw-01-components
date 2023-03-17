import styled from '@emotion/styled';

export const Friends = styled.ul`
  padding: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 20px auto 0;
  border-radius: 5px;
  border: 1px solid #317b1d;
  padding: 20px;
`;
export const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
export const FriendStatus = styled.span`
  display: block;
  text-align: center;
  margin: 20px 5px 20px 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 50%;
  border: 1px solid #9fd3c7;
`;
export const FriendName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
`;
