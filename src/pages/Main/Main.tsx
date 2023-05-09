import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { FilterForm } from '../../components/FilerForm/FilterForm';
import { Search } from '../../components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { userState } from '../../redux/selctors';
import { fetchFields, fetchJobs } from '../../redux/saga/actions';
import { JobsListMain } from '../../components/JobsListMain/JobsListMain';

export const Main = () => {
  const dispatch = useDispatch();
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
        <JobsListMain />
      </div>
    </Layout>
  );
};
