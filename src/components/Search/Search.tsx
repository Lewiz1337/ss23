import React from 'react';
import styles from './search.module.scss';
import { Billet } from '../Billet/Billet';
import { Button, TextInput } from '@mantine/core';
import { ReactComponent as SearchIcon } from '../../media/svg/Search.svg';
import { useDispatch } from 'react-redux';
import { fetchJobs } from '../../redux/slices/vacantionsSlice/jobs';
export const Search = () => {
  const dispatch = useDispatch();
  return (
    <Billet className={styles.root}>
      <TextInput
        className={styles.searchInput}
        variant="unstyled"
        style={{ border: 'none', outline: 'none' }}
        placeholder="Введите название вакансии"
        icon={<SearchIcon />}
      />
      <Button
        onClick={() => {
          dispatch(fetchJobs());
        }}>
        Поиск
      </Button>
    </Billet>
  );
};
