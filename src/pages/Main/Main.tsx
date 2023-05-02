import React from 'react';
import styles from './main.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { FilterForm } from '../../components/FilerForm/FilterForm';
import { Search } from '../../components/Search/Search';
import { JobsList } from '../../components/JobsList/JobsList';

export const Main = () => {
  return (
    <Layout aside={<FilterForm />}>
      <div>
        <Search />
        <JobsList />
      </div>
    </Layout>
  );
};
