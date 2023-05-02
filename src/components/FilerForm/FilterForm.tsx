import React, { forwardRef } from 'react';
import styles from './filterForm.module.scss';
import { Billet } from '../Billet/Billet';
import { CloseButton, Group, Select, Text, NumberInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ReactComponent as DownSVG } from '../../media/svg/Down.svg';
export const FilterForm = () => {
  const form = useForm({
    initialValues: {
      field: '',
      salaryFrom: '',
      salaryTo: '',
    },
  });
  return (
    <Billet className={styles.root}>
      <div className={styles.filterTitle}>
        <h3>Фильтры</h3>
        <div className={styles.clearFilters}>
          <p>Сбросить всё </p>
          <CloseButton aria-label="Clear filters" />
        </div>
      </div>
      <form className={styles.form} onSubmit={form.onSubmit((values) => console.log(values))}>
        <Select
          label="Отрасль"
          placeholder="Выберете отрасль"
          searchable
          rightSection={<DownSVG />}
          // itemComponent={SelectItem}
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
          {...form.getInputProps('field')}
        />
        <NumberInput
          min={0}
          label="Оклад"
          placeholder="От"
          type="number"
          rightSectionProps={{ border: 'none' }}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          {...form.getInputProps('salaryFrom')}
        />
        <NumberInput
          min={0}
          placeholder="До"
          type="number"
          rightSectionProps={{ border: 'none' }}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          {...form.getInputProps('salaryTo')}
        />
        <Button type="submit">Применить</Button>
      </form>
    </Billet>
  );
};
