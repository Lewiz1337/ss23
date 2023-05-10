import { Pagination as MPagination, PaginationProps } from '@mantine/core';

import styles from './pagination.module.scss';

export const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <MPagination
      className={styles.root}
      siblings={1}
      // value={+props.page}
      // total={125}
      // onChange={props.onChange}
      {...props}
    />
  );
};
