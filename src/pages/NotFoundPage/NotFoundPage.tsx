import styles from './notFoundPage.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { Empty } from '../../components/Empty/Empty';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate('/jobs_list');
  };
  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Page does not exist" />
        <title>404 Not Found</title>
      </Helmet>
      <div className={styles.root}>
        <Empty
          title="Упс, такой страницы не существует!"
          button={{ handleClick: onHandleClick, title: 'Поиск вакансий' }}
        />
      </div>
    </Layout>
  );
};
export default NotFoundPage;
