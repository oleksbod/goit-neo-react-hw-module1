import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.data}>@{tag}</p>
        <p className={css.data}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.bold}>{stats.followers}</span>
        </li>
        <li className={css.statsItemBorder}>
          <span>Views</span>
          <span className={css.bold}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
