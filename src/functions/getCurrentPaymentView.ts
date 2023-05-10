export const getCurrentPaymentView = (
  payment_from: number,
  payment_to: number,
  currency: string,
): string => {
  if (payment_from && payment_to) {
    return `${payment_from} - ${payment_to} ${currency}`;
  }
  if (payment_from && !payment_to) {
    return `от ${payment_from} ${currency}`;
  }
  if (!payment_from && payment_to) {
    return `до ${payment_to} ${currency}`;
  }
  return 'Договорная';
};
