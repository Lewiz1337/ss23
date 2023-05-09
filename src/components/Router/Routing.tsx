import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { JobPage } from '../../pages/JobPage/JobPage';
import { FavotireJobs } from '../../pages/FavoriteJobs/FavotireJobs';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/jobs_list" />} />
      <Route path="/jobs_list/" element={<Main />} />
      <Route path="/jobs_list/:id" element={<JobPage />} />
      <Route path="/jobs_favorite" element={<FavotireJobs />} />
      <Route path="/jobs_favorite/:id" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
