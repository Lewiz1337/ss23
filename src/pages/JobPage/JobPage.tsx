import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { jobState } from '../../redux/selctors';
import { Job } from '../../components/Job/Job';

import styles from './jobPage.module.scss';
import { JobDesc } from '../../components/JobDesc/JobDesc';
import { useParams } from 'react-router-dom';
import { fetchJobById } from '../../redux/saga/actions';

export const JobPage = () => {
  const { job } = useSelector(jobState);
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      dispatch(fetchJobById(+params.id));
    }
  }, []);

  return (
    <>
      {job && (
        <Layout className={styles.root}>
          <Job {...job} />
          <JobDesc description={job.vacancyRichText} />
        </Layout>
      )}
    </>
  );
};
