import React from 'react';
import { Loader, Pagination } from '@mantine/core';
import styles from './jobsList.module.scss';
import { Job } from '../Job/Job';
import { useNavigate } from 'react-router-dom';
import { Empty, EmptyButtonType } from '../Empty/Empty';
import { useSelector } from 'react-redux';
import { jobsState } from '../../redux/selctors';

type JobsListType = {
  jobs: JobType[];
};

export const JobsList: React.FC<JobsListType> = ({ jobs }) => {
  const [activePage, setPage] = React.useState(1);

  const offset = 4;
  const pageCount = Math.ceil(jobs.length / offset);
  const currentPage = jobs.slice(offset * (activePage - 1), offset * (activePage - 1) + offset);

  const navigate = useNavigate();
  const onJobHandleClick = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <div className={styles.root}>
      {currentPage.map((job) => {
        return <Job key={job.id} {...job} handleClick={() => onJobHandleClick(job.id)} />;
      })}
      <Pagination className={styles.pagination} total={pageCount} onChange={setPage} />
    </div>
  );
};

type JobsListHOCType = {
  button?: EmptyButtonType;
  jobs: JobType[];
};
export const JobsListHOC: React.FC<JobsListHOCType> = ({ jobs, button }) => {
  const { status } = useSelector(jobsState);
  if (status === 'loading') {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }
  return <>{jobs.length ? <JobsList jobs={jobs} /> : <Empty button={button} />}</>;
};
