export const onHandleKeyDown = (
  e: React.KeyboardEvent<HTMLElement>,
  callback?: (...x: any) => void,
  ...arg: any
): void => {
  if (e.key && (e.key === 'Enter' || e.key === ' ') && callback) {
    callback(...arg);
  }
};
