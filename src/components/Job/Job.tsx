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
import classNames from 'classnames';
import { onHandleKeyDown } from '../../functions/onHandleKeyDown';
import { getCurrentPaymentView } from '../../functions/getCurrentPaymentView';

interface JobTypeProps extends JobType {
  handleClick?: () => any;
  static?: boolean;
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

  return (
    <Billet
      className={classNames({ [styles.root]: true, [styles.static]: props.static })}
      onClick={props.handleClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => onHandleKeyDown(e, props.handleClick)}
      tabIndex={0}>
      <div className={styles.name}>
        <h3>{profession}</h3>
        <div
          tabIndex={0}
          className={styles.iconWrapper}
          onClick={toggleFavorite}
          onKeyDown={(e) => onHandleKeyDown(e, toggleFavorite, e)}>
          {!favoriteJobs.find((item) => item.id === id) ? <SaveIcon /> : <SaveIconActive />}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.salary}>
          з/п {getCurrentPaymentView(payment_from, payment_to, currency)}
        </p>
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
