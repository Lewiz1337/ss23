import React from 'react';
import styles from './header.module.scss';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { useAppLS } from '../../hooks/useAppLS';
import { useDispatch } from 'react-redux';
import { setFavoriteJob } from '../../redux/slices/jobsSlice/jobs';
import { fetchAuth } from '../../redux/saga/actions';
export const Header = () => {
  const AppLS = useAppLS('jobored_favorite');
  const dispatch = useDispatch();

  React.useEffect(() => {
    const favoriteJobs = AppLS.getStorage();
    dispatch(setFavoriteJob(favoriteJobs));
    dispatch(fetchAuth());
  }, []);

  return (
    <header className={styles.root}>
      <Logo />
      <Navbar />
    </header>
  );
};
