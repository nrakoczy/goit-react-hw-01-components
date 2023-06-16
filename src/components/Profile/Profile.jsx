import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.profileAvatar} />
      <p className={css.profileName}>{username}</p>
      <p className={css.profileTag}>@{tag}</p>
      <p className={css.profileLocation}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.profileStat}>
        <span className={css.statLabel}>Followers</span>
        <span className={css.statQuantity}>{followers}</span>
      </li>
      <li className={css.profileStat}>
        <span className={css.statLabel}>Views</span>
        <span className={css.statQuantity}>{views}</span>
      </li>
      <li className={css.profileStat}>
        <span className={css.statLabel}>Likes</span>
        <span className={css.statQuantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
