import { Loader as MantineLoader } from '@mantine/core';
import React from 'react';

import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.root}>
      <MantineLoader />
    </div>
  );
};
