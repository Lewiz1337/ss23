import React from 'react';
import styles from './layout.module.scss';

type LayoutType = {
  children: React.ReactNode;
  aside?: React.ReactNode;
};

export const Layout: React.FC<LayoutType> = (props) => {
  return (
    <div className={styles.root}>
      {props.aside && <aside>{props.aside}</aside>}
      <main id={styles.main}>{props.children}</main>
    </div>
  );
};
