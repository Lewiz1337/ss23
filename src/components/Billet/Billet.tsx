import React from 'react';
import styles from './billet.module.scss';
import classNames from 'classnames';

type BilletType = {
  children: React.ReactNode;
  [x: string]: any;
};

export const Billet: React.FC<BilletType> = (props) => {
  const { className, children } = props;
  const billetClass = classNames({ [styles.biilet]: true, [className]: className });

  return (
    <div {...props} className={billetClass}>
      {children}
    </div>
  );
};
