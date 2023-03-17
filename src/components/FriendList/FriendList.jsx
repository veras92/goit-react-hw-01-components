import PropTypes from 'prop-types';
import { Friends, Friend } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendListItem friend={friend} />
        </Friend>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
