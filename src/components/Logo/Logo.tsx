import styles from './logo.module.scss';
import { ReactComponent as LogoSVG } from '../../media/svg/logo.svg';
export const Logo = () => {
  return (
    <div className={styles.root}>
      <LogoSVG />
      <h2>Jobored</h2>
    </div>
  );
};
