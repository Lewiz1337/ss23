import { Navigate, Route, Routes } from 'react-router-dom';
import { JobPage, MainPage, NotFoundPage, FavoritePage } from '../../pages';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/jobs_list" />} />
      <Route path="/jobs_list/" element={<MainPage />} />
      <Route path="/jobs_list/:id" element={<JobPage />} />
      <Route path="/jobs_favorite" element={<FavoritePage />} />
      <Route path="/jobs_favorite/:id" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
