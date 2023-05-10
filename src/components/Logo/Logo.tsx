import styles from './logo.module.scss';
import { ReactComponent as LogoSVG } from '../../media/svg/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFilter, setSearch } from '../../redux/slices/filterSlice/filter';

export const Logo = () => {
  const dispatch = useDispatch();
  const onHandleLogoClick = () => {
    dispatch(clearFilter());
    dispatch(setSearch(''));
  };

  return (
    <Link to="/" onClick={onHandleLogoClick} className={styles.root}>
      <LogoSVG />
      <h2>Jobored</h2>
    </Link>
  );
};
