import React from 'react';
import styles from './vacantion.module.scss';
import { Billet } from '../Billet/Billet';
import { ReactComponent as SaveIcon } from '../../media/svg/SaveButton.svg';
import { ReactComponent as LocationIcon } from '../../media/svg/location.svg';
import ReactPaginate from 'react-paginate';

type JobType = {
  profession: string;
  payment_from: number;
  payment_to: number;
  address: string;
  currency: string;
  type_of_work: { id: number; title: string };
  id: number;
};

export const Job: React.FC<JobType> = (props) => {
  const { profession, payment_from, payment_to, address, currency, type_of_work, id } = props;

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

  const getCurrentCityAdress = (address: string): string => {
    if (!address) return '';
    const city = address.split(',');
    return city[0];
  };

  return (
    <Billet className={styles.root}>
      <div className={styles.name}>
        <h3>{profession}</h3>
        <SaveIcon />
      </div>
      <div className={styles.info}>
        <p className={styles.salary}>з/п {currentPayment(payment_from, payment_to, currency)}</p>
        <span>•</span>
        <p className={styles.schedule}>{type_of_work.title}</p>
      </div>
      {address && (
        <div className={styles.location}>
          <LocationIcon />
          <p>{getCurrentCityAdress(address)}</p>
        </div>
      )}
    </Billet>
  );
};
