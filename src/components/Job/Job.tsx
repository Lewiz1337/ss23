import React from 'react';
import styles from './job.module.scss';
import { Billet } from '../Billet/Billet';
import { ReactComponent as SaveIcon } from '../../media/svg/SaveButton.svg';
import { ReactComponent as SaveIconActive } from '../../media/svg/SaveButtonActive.svg';
import { ReactComponent as MapIcon } from '../../media/svg/location.svg';

import { useAppLS } from '../../hooks/useAppLS';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoriteJob } from '../../redux/slices/jobsSlice/jobs';
import { jobsState } from '../../redux/selctors';
import { Item } from '../../redux/slices/jobSlice/job';

interface JobTypeProps extends JobType {
  handleClick?: (id: number) => any;
}

export const Job: React.FC<JobTypeProps> = (props) => {
  const { profession, payment_from, payment_to, town, currency, type_of_work, id } = props;
  const AppLS = useAppLS('favorite');
  const dispatch = useDispatch();

  const { favoriteJobs } = useSelector(jobsState);

  const toggleFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    AppLS.toggleStorage(id);
    const favoriteJobs = AppLS.getStorage();
    dispatch(setFavoriteJob(favoriteJobs));
  };

  const currentPayment = (payment_from: number, payment_to: number, currency: string): string => {
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

  return (
    <Billet className={styles.root} onClick={props.handleClick}>
      <div className={styles.name}>
        <h3>{profession}</h3>
        <div className={styles.iconWrapper} onClick={(e) => toggleFavorite(e)}>
          {!favoriteJobs.find((item) => item.id === id) ? <SaveIcon /> : <SaveIconActive />}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.salary}>з/п {currentPayment(payment_from, payment_to, currency)}</p>
        <span>•</span>
        <p className={styles.schedule}>{type_of_work.title}</p>
      </div>
      {town && (
        <div className={styles.location}>
          <MapIcon />
          <p>{town.title}</p>
        </div>
      )}
    </Billet>
  );
};
