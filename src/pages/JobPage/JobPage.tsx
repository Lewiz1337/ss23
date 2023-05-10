import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { jobState, userState } from '../../redux/selctors';
import { Job } from '../../components/Job/Job';

import styles from './jobPage.module.scss';
import { JobDesc } from '../../components/JobDesc/JobDesc';
import { useParams } from 'react-router-dom';
import { fetchJobById } from '../../redux/saga/actions';

export const JobPage = () => {
  const { job } = useSelector(jobState);
  const { isAuth } = useSelector(userState);
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    if (params.id && isAuth) {
      dispatch(fetchJobById(+params.id));
    }
  }, [isAuth]);

  return (
    <Layout className={styles.root}>
      {job && (
        <>
          <Job {...job} static={true} />
          <JobDesc description={job.vacancyRichText} />
        </>
      )}
    </Layout>
  );
};
