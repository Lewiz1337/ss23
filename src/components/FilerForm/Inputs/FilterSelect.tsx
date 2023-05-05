import { Group, Select, Text } from '@mantine/core';
import React, { forwardRef } from 'react';
import { ReactComponent as DownSVG } from '../../../media/svg/Down.svg';
import { useSelector } from 'react-redux';
import { filterState } from '../../../redux/selctors';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  title_trimmed: string;
  value: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, title_trimmed, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  ),
);

export const FilterSelect: React.FC<any> = (props) => {
  const { fields } = useSelector(filterState);

  const fieldsData = fields.map((item) => {
    return { label: item.title_trimmed, title: item.title, value: String(item.key) };
  });

  return (
    <Select
      label="Отрасль"
      placeholder="Выберете отрасль"
      rightSection={<DownSVG />}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      itemComponent={SelectItem}
      data={fieldsData}
      searchable
      maxDropdownHeight={400}
      nothingFound="Ничего не найдено"
      filter={(value, item) => item.title.toLowerCase().includes(value.toLowerCase().trim())}
      {...props}
    />
  );
};
