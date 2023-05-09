import React from 'react';
import styles from './notFoundPage.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { Empty } from '../../components/Empty/Empty';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate('/jobs_list');
  };
  return (
    <Layout>
      <div className={styles.root}>
        <Empty
          title="Упс, такой страницы не существует!"
          button={{ handleClick: onHandleClick, title: 'Поиск вакансий' }}
        />
      </div>
    </Layout>
  );
};
