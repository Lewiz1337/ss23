import React from 'react';
import styles from './billet.module.scss';
import classNames from 'classnames';

type BilletType = {
  children: React.ReactNode;
  [x: string]: any;
};

export const Billet: React.FC<BilletType> = (props) => {
  const billetClass = classNames({ [styles.biilet]: true, [props.className]: props.className });
  return <div className={billetClass}>{props.children}</div>;
};
