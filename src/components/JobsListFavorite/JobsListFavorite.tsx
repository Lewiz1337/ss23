import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jobsState } from '../../redux/selctors';
import { JobsListHOC } from '../JobsList/JobsList';
import { Pagination } from '@mantine/core';

import styles from '../JobsList/jobsList.module.scss';

export const JobsListFavorite = () => {
  const [activePage, setPage] = React.useState(1);
  const { favoriteJobs } = useSelector(jobsState);
  const offset = 4;
  const pageCount = Math.ceil(favoriteJobs.length / offset);
  const currentPage = favoriteJobs.slice(
    offset * (activePage - 1),
    offset * (activePage - 1) + offset,
  );
  const navigate = useNavigate();

  const EmptyButtonHandleClick = () => {
    navigate('/jobs_list');
  };
  return (
    <div className={styles.root}>
      <JobsListHOC
        button={{ handleClick: EmptyButtonHandleClick, title: 'Поиск вакансий' }}
        jobs={currentPage}
      />
      <Pagination
        className={styles.pagination}
        value={activePage}
        total={pageCount}
        onChange={setPage}
      />
    </div>
  );
};
