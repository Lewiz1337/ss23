import React from 'react';
import { JobsListHOC } from '../JobsList/JobsList';
import { useDispatch, useSelector } from 'react-redux';
import { filterState, jobsState } from '../../redux/selctors';
import { useSearchParams } from 'react-router-dom';
import { fetchJobs } from '../../redux/saga/actions';
import { setFilters, setPage, setSearch } from '../../redux/slices/filterSlice/filter';

import styles from '../JobsList/jobsList.module.scss';
import { SkeletonList } from '../Skeleton/Skeleton';
import { Pagination } from '../Pagination/Pagination';

export const JobsListMain = () => {
  const { jobs, status } = useSelector(jobsState);
  const { page, filters, search } = useSelector(filterState);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const firstMount = React.useRef(true);

  React.useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      dispatch(
        setFilters({
          field: searchParams.get('field') || '',
          paymentFrom: searchParams.get('paymentFrom') || '',
          paymentTo: searchParams.get('paymentTo') || '',
        }),
      );
      dispatch(setPage(searchParams.get('page') || '1'));
      dispatch(setSearch(searchParams.get('search') || ''));
    }
    const { field, paymentFrom, paymentTo } = filters;

    setSearchParams({
      page,
      field,
      paymentFrom,
      paymentTo,
      search,
    });
  }, [page, filters, search]);

  const onChangePage = (page: number) => {
    dispatch(setPage(String(page)));
    dispatch(fetchJobs());
  };

  return (
    <div className={styles.root}>
      {status !== 'loading' ? <JobsListHOC jobs={jobs} /> : <SkeletonList count={4} />}
      {(status === 'loading' || !!jobs.length) && (
        <Pagination value={+page} total={125} onChange={onChangePage} />
      )}
    </div>
  );
};
