import styles from './search.module.scss';
import { Billet } from '../Billet/Billet';
import { Button, TextInput } from '@mantine/core';
import { ReactComponent as SearchIcon } from '../../media/svg/Search.svg';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice/filter';
import { fetchJobs } from '../../redux/saga/actions';
import { useForm } from '@mantine/form';

type SearchType = {
  searchValue: string;
};

export const Search = () => {
  const dispatch = useDispatch();
  const form = useForm<SearchType>({
    initialValues: {
      searchValue: '',
    },
  });

  const onSearch = ({ searchValue }: SearchType) => {
    console.log(searchValue);
    dispatch(setSearch(searchValue));
    dispatch(fetchJobs());
  };

  return (
    <Billet className={styles.root}>
      <form onSubmit={form.onSubmit((value) => onSearch(value))}>
        <TextInput
          className={styles.searchInput}
          variant="unstyled"
          style={{ border: 'none', outline: 'none' }}
          placeholder="Введите название вакансии"
          icon={<SearchIcon />}
          {...form.getInputProps('searchValue')}
        />
        <Button type="submit">Поиск</Button>
      </form>
    </Billet>
  );
};
