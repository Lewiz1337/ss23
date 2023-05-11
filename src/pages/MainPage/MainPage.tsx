import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { FilterForm } from '../../components/FilerForm/FilterForm';
import { Search } from '../../components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { userState } from '../../redux/selctors';
import { fetchFields, fetchJobs } from '../../redux/saga/actions';
import { JobsListMain } from '../../components/JobsListMain/JobsListMain';
import { Helmet } from 'react-helmet';

const MainPage = () => {
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
      <>
        <Helmet>
          <meta name="description" content="Jobored main page - list of vacancies" />
          <title>Jobored</title>
        </Helmet>

        <main>
          <Search />
          <JobsListMain />
        </main>
      </>
    </Layout>
  );
};
export default MainPage;
