import { Loader as MantineLoader } from '@mantine/core';

import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.root}>
      <MantineLoader />
    </div>
  );
};
