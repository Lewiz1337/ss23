import styles from './favoriteJobs.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { JobsListFavorite } from '../../components/JobsListFavorite/JobsListFavorite';

export const FavotireJobs = () => {
  return (
    <Layout className={styles.root}>
      <JobsListFavorite />
    </Layout>
  );
};
