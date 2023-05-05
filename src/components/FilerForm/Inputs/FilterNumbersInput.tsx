import { NumberInput } from '@mantine/core';
import React from 'react';

type FilterNumbersInputType = {
  placeholder: string;
  label?: string;
};

export const FilterNumbersInput: React.FC<FilterNumbersInputType> = ({
  placeholder,
  label,
  ...props
}) => {
  return (
    <NumberInput
      min={0}
      label={label}
      placeholder={placeholder}
      type="number"
      rightSectionProps={{ border: 'none' }}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      // {...form.getInputProps('paymentFrom')}
      {...props}
    />
  );
};
