import { Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CrossIcon } from '../../media/svg/cross.svg';
import { fetchJobs } from '../../redux/saga/actions';
import { filterState } from '../../redux/selctors';
import { FiltersType, clearFilter, setFilters } from '../../redux/slices/filterSlice/filter';
import { Billet } from '../Billet/Billet';
import { FilterNumbersInput } from './Inputs/FilterNumbersInput';
import { FilterSelect } from './Inputs/FilterSelect';
import styles from './filterForm.module.scss';

export const FilterForm = () => {
  const { filters } = useSelector(filterState);
  const dispatch = useDispatch();

  const form = useForm<FiltersType>({
    initialValues: {
      field: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  React.useEffect(() => {
    const { field, paymentFrom, paymentTo } = filters;
    form.setValues({
      field,
      paymentFrom,
      paymentTo,
    });
  }, [filters]);

  const onSubmitForm = (values: FiltersType) => {
    const { field, paymentFrom, paymentTo } = values;
    dispatch(
      setFilters({
        field,
        paymentFrom,
        paymentTo,
      }),
    );
    dispatch(fetchJobs());
  };

  const onClearFilters = () => {
    let key: keyof FiltersType;
    for (key in filters) {
      if (filters[key] !== '') {
        dispatch(clearFilter());
        dispatch(fetchJobs());
        break;
      }
    }
    form.reset();
  };

  return (
    <Billet className={styles.root}>
      <div className={styles.filterTitle}>
        <h3>Фильтры</h3>
        <div className={styles.clearFilters} onClick={onClearFilters}>
          <p>Сбросить все</p>
          <CrossIcon />
        </div>
      </div>
      <form className={styles.form} onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
        <FilterSelect {...form.getInputProps('field')} />
        <div className={styles.numberInputs}>
          <FilterNumbersInput
            placeholder="От"
            label="Оклад"
            {...form.getInputProps('paymentFrom')}
          />
          <FilterNumbersInput placeholder="До" {...form.getInputProps('paymentTo')} />
        </div>

        <Button type="submit">Применить</Button>
      </form>
    </Billet>
  );
};
