import React from 'react';
import styles from './tab.module.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

type TabType = {
  to: string;
  [x: string]: any;
};

export const Tab: React.FC<TabType> = (props) => {
  const location = useLocation();

  const isActiveTab = () => {
    if (location.pathname.includes(props.to)) {
      return true;
    }
    return false;
  };
  return (
    <Link
      to={props.to}
      tabIndex={0}
      className={classNames({
        [props.className]: true,
        [styles.tab]: true,
        [styles.active]: isActiveTab(),
      })}>
      {props.children}
    </Link>
  );
};
