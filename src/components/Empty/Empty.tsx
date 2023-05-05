import React from 'react';
import { ReactComponent as EmptyIcon } from '../../media/svg/Empty.svg';

import styles from './empty.module.scss';
import { Button } from '@mantine/core';

export type EmptyButtonType = {
  handleClick: () => any;
  title: string;
};

type EmptyProps = {
  button?: EmptyButtonType;
};

export const Empty: React.FC<EmptyProps> = (props) => {
  return (
    <div className={styles.root}>
      <EmptyIcon />
      <h2>Упс, здесь еще ничего нет!</h2>
      {props.button && (
        <Button className={styles.button} variant="light" onClick={props.button.handleClick}>
          {props.button.title}
        </Button>
      )}
    </div>
  );
};
