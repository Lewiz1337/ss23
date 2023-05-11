import { Pagination as MPagination, PaginationProps } from '@mantine/core';

import styles from './pagination.module.scss';

export const Pagination: React.FC<PaginationProps> = (props) => {
  if (props.total <= 1) {
    return <></>;
  }
  return <MPagination className={styles.root} siblings={1} {...props} />;
};
