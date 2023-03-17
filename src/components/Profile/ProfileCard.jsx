import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ImgAvatar,
  Name,
  Tag,
  Location,
  StatsContainer,
  Wrapper,
  Label,
  Quantity,
} from './ProfileCard.styled';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ImgAvatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <StatsContainer>
        <Wrapper>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Wrapper>
        <Wrapper>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Wrapper>
        <Wrapper>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Wrapper>
      </StatsContainer>
    </ProfileContainer>
  );
};
ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
