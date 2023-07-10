import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
    <NavLink to="/" className={styles.bAndS}>
      <h1>B</h1>
    </NavLink>
    <h1>ook/</h1>
    <NavLink to="/" className={styles.bAndS}>
      <h1>S</h1>
    </NavLink>
    <h1>helf</h1>
  </div>

  )
}

export default Header