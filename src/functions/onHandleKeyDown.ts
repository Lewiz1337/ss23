export const onHandleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  callback?: (...x: any) => void,
  ...arg: any
): void => {
  if (e.key && (e.key === 'Enter' || e.key === ' ') && callback) {
    callback(...arg);
  }
};
