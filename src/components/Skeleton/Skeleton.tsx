import React from 'react';
import { Job } from '../Job/Job';
import { Skeleton } from '@mantine/core';

import styles from '../JobsList/jobsList.module.scss';

export const AppSkeleton = () => {
  return (
    <Skeleton>
      <Job
        id={0}
        profession={'mock'}
        firm_name={'mock'}
        town={{ title: 'mock' }}
        catalogues={[]}
        type_of_work={{ title: 'mock' }}
        payment_to={0}
        payment_from={0}
        currency={'mock'}
        published={0}
        vacancyRichText={'mock'}
      />
    </Skeleton>
  );
};

type SkeletonListType = {
  count: number;
};

export const SkeletonList: React.FC<SkeletonListType> = ({ count = 4 }) => {
  const array = [...new Array(count)];
  return (
    <div className={styles.root}>
      {array.map((_) => (
        <AppSkeleton />
      ))}
    </div>
  );
};
