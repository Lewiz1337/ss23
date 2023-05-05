import { useSelector } from 'react-redux';
import { jobsState } from '../redux/selctors';

export const useAppLS = (localStorageName: string) => {
  const { jobs } = useSelector(jobsState);

  const get = (): JobType[] => {
    const data = localStorage.getItem(localStorageName);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  };

  const toggle = (id: number) => {
    let data = get();
    if (!data.find((item) => item.id === id)) {
      const job = jobs.find((item) => item.id === id);
      if (job) {
        data.push(job);
      } else {
        console.error('Job not found');
      }
    } else {
      data = [...data.filter((item) => item.id !== id)];
    }
    localStorage.setItem(localStorageName, JSON.stringify(data));
  };

  return {
    getStorage: get,
    toggleStorage: toggle,
  };
};
