import React from 'react';

import styles from './jobDesc.module.scss';
import { Billet } from '../Billet/Billet';

type JobDescType = {
  description: string;
};

export const JobDesc: React.FC<JobDescType> = ({ description }) => {
  const markup = { __html: description };

  return (
    <Billet className={styles.root}>
      <div dangerouslySetInnerHTML={markup}></div>
    </Billet>
  );
};
