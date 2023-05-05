import styles from './logo.module.scss';
import { ReactComponent as LogoSVG } from '../../media/svg/logo.svg';
import { Link } from 'react-router-dom';
export const Logo = () => {
  return (
    <Link to="/" className={styles.root}>
      <LogoSVG />
      <h2>Jobored</h2>
    </Link>
  );
};
