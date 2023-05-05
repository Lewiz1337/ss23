import React from 'react';

import styles from './favoriteJobs.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { JobsListHOC } from '../../components/JobsList/JobsList';
import { jobsState } from '../../redux/selctors';
import { useNavigate } from 'react-router-dom';

export const FavotireJobs = () => {
  const { favoriteJobs } = useSelector(jobsState);
  const navigate = useNavigate();

  const EmptyButtonHandleClick = () => {
    navigate('/jobs_list');
  };

  return (
    <Layout className={styles.root}>
      <JobsListHOC
        jobs={favoriteJobs}
        button={{ handleClick: EmptyButtonHandleClick, title: 'Поиск вакансий' }}
      />
    </Layout>
  );
};
