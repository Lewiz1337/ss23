import React from 'react';
import styles from './header.module.scss';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { fetchJobs } from '../../redux/slices/vacantionsSlice/jobs';
export const Header = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchJobs());
  });

  return (
    <header className={styles.root}>
      <Logo />
      <Navbar />
    </header>
  );
};
