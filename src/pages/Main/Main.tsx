import React from 'react';
import styles from './main.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { FilterForm } from '../../components/FilerForm/FilterForm';
import { Search } from '../../components/Search/Search';
import { JobsListHOC } from '../../components/JobsList/JobsList';
import { useDispatch, useSelector } from 'react-redux';
import { jobsState, userState } from '../../redux/selctors';
import { fetchFields, fetchJobs } from '../../redux/saga/actions';

export const Main = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector(jobsState);
  const { isAuth } = useSelector(userState);

  React.useEffect(() => {
    if (isAuth) {
      dispatch(fetchJobs());
      dispatch(fetchFields());
    }
  }, [isAuth]);

  return (
    <Layout aside={<FilterForm />}>
      <div>
        <Search />
        <JobsListHOC jobs={jobs} />
      </div>
    </Layout>
  );
};
