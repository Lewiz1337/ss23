import React from 'react';
import { ReactComponent as EmptyIcon } from '../../media/svg/Empty.svg';

import styles from './empty.module.scss';
import { Button } from '@mantine/core';

export type EmptyButtonType = {
  handleClick: () => any;
  title: string;
};

type EmptyProps = {
  title?: string;
  button?: EmptyButtonType;
};

export const Empty: React.FC<EmptyProps> = ({ title = 'Упс, здесь еще ничего нет!', button }) => {
  return (
    <div className={styles.root}>
      <EmptyIcon />
      <h2>{title}</h2>
      {button && (
        <Button className={styles.button} variant="light" onClick={button.handleClick}>
          {button.title}
        </Button>
      )}
    </div>
  );
};
