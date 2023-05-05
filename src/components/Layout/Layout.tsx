import React from 'react';
import styles from './layout.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { filterState, jobState } from '../../redux/selctors';
import { Loader } from '../Loader/Loader';

type LayoutType = {
  children: React.ReactNode;
  aside?: React.ReactNode;
  [x: string]: any;
};

export const Layout: React.FC<LayoutType> = (props) => {
  const { aside, children } = props;
  const { status: jobStatus } = useSelector(jobState);
  const { status: filterStatus } = useSelector(filterState);

  const isLoading = jobStatus === 'loading' || filterStatus === 'loading';

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classNames({ [styles.root]: true, [props.className]: props.className })}>
      <>
        {aside && <aside>{aside}</aside>}
        <main id={styles.main}>{children}</main>
      </>
    </div>
  );
};
