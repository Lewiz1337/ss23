import styles from './favoriteJobs.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { JobsListFavorite } from '../../components/JobsListFavorite/JobsListFavorite';
import { Helmet } from 'react-helmet';

const FavotireJobs = () => {
  return (
    <Layout className={styles.root}>
      <Helmet>
        <meta name="description" content="Your favorite vacancys" />
        <title>Избранное</title>
      </Helmet>
      <JobsListFavorite />
    </Layout>
  );
};
export default FavotireJobs;
