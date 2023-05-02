import React from 'react';
import styles from './tab.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type TabType = {
  to: string;
  active?: Boolean;
  [x: string]: any;
};

export const Tab: React.FC<TabType> = (props) => {
  return (
    <Link
      to={props.to}
      className={classNames({
        [props.className]: true,
        [styles.tab]: true,
        [styles.active]: props.active,
      })}>
      {props.children}
    </Link>
  );
};
