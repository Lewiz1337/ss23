import React from 'react';
import styles from './navbar.module.scss';
import { Tab } from '../Tab/Tab';

export const Navbar = () => {
  return (
    <nav className={styles.root}>
      <Tab to="/jobs_list" active={true}>
        Поиск вакансий
      </Tab>
      <Tab to="/jobs_favorite">Избранное</Tab>
    </nav>
  );
};
