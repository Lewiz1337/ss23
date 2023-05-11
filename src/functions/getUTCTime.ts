export const getUTCTime = (addTimeSeconds = 0): number => {
  return new Date(new Date().toISOString()).getTime() + addTimeSeconds * 1000;
};
