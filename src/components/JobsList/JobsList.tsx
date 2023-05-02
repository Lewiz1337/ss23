import React from 'react';
import { Pagination } from '@mantine/core';
import styles from './jobsList.module.scss';
import { useSelector } from 'react-redux';
import { jobsState } from '../../redux/selctors';
import { Job } from '../Job/Job';

export const JobsList = () => {
  const [activePage, setPage] = React.useState(1);
  const { jobs } = useSelector(jobsState);

  const data = [...new Array(21)].map((item, i) => i);
  const offset = 4;
  const pageCount = Math.ceil(jobs.length / offset);
  const currentPage = jobs.slice(offset * (activePage - 1), offset * (activePage - 1) + offset);

  // payment_from(pin):33600
  // payment_to(pin):38600
  // address
  // currency
  // type_of_work

  return (
    <div className={styles.root}>
      {currentPage.map(
        ({ profession, payment_from, payment_to, address, currency, type_of_work, id }, i) => {
          const props = {
            profession,
            payment_from,
            payment_to,
            address,
            currency,
            type_of_work,
            id,
          };
          return <Job key={id} {...props} />;
        },
      )}
      <Pagination total={pageCount} onChange={setPage} />
    </div>
  );
};
