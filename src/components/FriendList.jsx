import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul class={css.friendList}>
      {friends.map(item => (
        <li key={item.id} class={css.listItem}>
          {item.isOnline ? (
            <li class={css.status} style={{ color: 'green' }}>
            </li>
          ) : (
            <li class={css.status} style={{ color: 'red' }}>
            </li>
          )}
          <img src={item.avatar} class="avatar" alt="User Avatar" width="68" />
          <p class={css.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    avatar: PropTypes.img,
    name: PropTypes.string,
  }),
};