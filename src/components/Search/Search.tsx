import styles from './search.module.scss';
import React from 'react';
import { Billet } from '../Billet/Billet';
import { Button, TextInput } from '@mantine/core';
import { ReactComponent as SearchIcon } from '../../media/svg/Search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice/filter';
import { fetchJobs } from '../../redux/saga/actions';
import { useForm } from '@mantine/form';
import { useSearchParams } from 'react-router-dom';
import { filterState } from '../../redux/selctors';

type SearchType = {
  searchValue: string;
};

export const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { search } = useSelector(filterState);
  const form = useForm<SearchType>({
    initialValues: {
      searchValue: '',
    },
  });

  const firstMount = React.useRef(true);
  const onSearch = ({ searchValue }: SearchType) => {
    console.log(searchValue);
    dispatch(setSearch(searchValue));
    dispatch(fetchJobs());
  };
  React.useLayoutEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      const param = searchParams.get('search');

      if (param) {
        onSearch({ searchValue: param });
      }
    }
    form.setValues({
      searchValue: search,
    });
  }, [search]);

  return (
    <Billet className={styles.root}>
      <form onSubmit={form.onSubmit((value) => onSearch(value))}>
        <TextInput
          className={styles.searchInput}
          variant="unstyled"
          data-elem="search-input"
          style={{ border: 'none', outline: 'none' }}
          placeholder="Введите название вакансии"
          icon={<SearchIcon />}
          {...form.getInputProps('searchValue')}
        />
        <Button data-elem="search-button" type="submit">
          Поиск
        </Button>
      </form>
    </Billet>
  );
};
